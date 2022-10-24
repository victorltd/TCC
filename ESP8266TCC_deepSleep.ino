/*
  Rui Santos
  Complete project details at our blog: https://RandomNerdTutorials.com/esp8266-data-logging-firebase-realtime-database/
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

// Provide the token generation process info.
#include "addons/TokenHelper.h"
// Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

/*
// Insert your network credentials
#define WIFI_SSID "F-Carranca_01"
#define WIFI_PASSWORD "fcarranca01"
*/

/*
#define WIFI_SSID "Wifi Home - KASATECH_2,4G"
#define WIFI_PASSWORD "wifihomesenhAz"
*/


#define WIFI_SSID "agr_hangar"
//#define WIFI_PASSWORD "lunna0611"

/*
#define WIFI_SSID "Lunna - JRTELECOM"
#define WIFI_PASSWORD "lunna0611"
*/

// Insert Firebase project API Key
#define API_KEY "AIzaSyADroxCPmfIUYnuVKib6yzj-PZDDpyphds"

// Insert Authorized Email and Corresponding Password
#define USER_EMAIL "victoraugusto1910@gmail.com"
#define USER_PASSWORD "estacaoaero123"

// Insert RTDB URLefine the RTDB URL
#define DATABASE_URL "estacaoaero-default-rtdb.firebaseio.com"

// Define NTP properties, for the correctly hour on the charts(brazilian hour)
#define NTP_OFFSET   60 * 60      // In seconds
#define NTP_INTERVAL 60 * 1000    // In miliseconds
#define NTP_ADDRESS  "a.st1.ntp.br"  // change this to whatever pool is closest (see ntp.org)
tm tm;                              // the structure tm holds time information in a more convient way

// Define Firebase objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

// Variable to save USER UID
String uid;

// Database main path (to be updated in setup with the user UID)
String databasePath;
// Database child nodes
String tempPath = "/temperature";
String humPath = "/humidity";
String presPath = "/pressure";
String adPath = "/ad";

String timePath = "/timestamp";



// Parent Node (to be updated in every loop)
String parentPath;

FirebaseJson json;

// Define NTP Client to get time
WiFiUDP ntpUDP;
//NTPClient timeClient(ntpUDP, "0.br.pool.ntp.org");
//NTPClient timeClient(ntpUDP, NTP_ADDRESS, -3*NTP_OFFSET, NTP_INTERVAL);

NTPClient timeClient(ntpUDP, "a.st1.ntp.br", 60, 60000);




// Variable to save current epoch time
int timestamp;

// BME280 sensor
Adafruit_BME280 bme; // I2C
float temperature;
float humidity;
float pressure;

//AD variables
float p1, p2, p3, p4, p5, p6, ad;
float t0=288.15;
float p0=1013.25;
//end of AD variables

// Timer variables (send new readings every three minutes)
unsigned long sendDataPrevMillis = 0;
unsigned long timerDelay = 30000;

// Initialize BME280
void initBME(){ 
  if (!bme.begin(0x76)) {
    Serial.println("Could not find a valid BME280 sensor, check wiring!");
    while (1);
  }
}

// Initialize WiFi
void initWiFi() {
  WiFi.begin(WIFI_SSID, NULL);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println(WiFi.localIP());
  Serial.println();
}

// Function that gets current epoch time
unsigned long getTime() {
  timeClient.update();
  unsigned long now = timeClient.getEpochTime();
  return now;
}


//acho que vou precisar criar uma funcao que antes ficava no loop


void setup(){
  Serial.begin(115200);
  Serial.setTimeout(3000); //fica acordado por 30s


  // Initialize BME280 sensor
  initBME();
  initWiFi();
  timeClient.begin();

  // Assign the api key (required)
  config.api_key = API_KEY;

  // Assign the user sign in credentials
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  // Assign the RTDB URL (required)
  config.database_url = DATABASE_URL;

  Firebase.reconnectWiFi(true);
  fbdo.setResponseSize(4096);

  // Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h

  // Assign the maximum retry of token generation
  config.max_token_generation_retry = 5;

  // Initialize the library with the Firebase authen and config
  Firebase.begin(&config, &auth);

  // Getting the user UID might take a few seconds
  Serial.println("Getting User UID");
  while ((auth.token.uid) == "") {
    Serial.print('.');
    delay(1000);
  }
  // Print user UID
  uid = auth.token.uid.c_str();
  Serial.print("User UID: ");
  Serial.println(uid);

  //tentando ver se funciona para qualquer email
  // Update database path
  //databasePath = "/UsersData/" + uid + "/readings";

  //funcionou kk, agora qq elemento pode acessar meu banco
  //se eu remover o user id do json que gera
  // Update database path
  databasePath = "/UsersData/readings";

  
  // Send new readings to database
  if (Firebase.ready() && (millis() - sendDataPrevMillis > timerDelay || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();

    //Get current timestamp
    timestamp = getTime();
    Serial.print ("time: ");
    Serial.println (timestamp);

    //Get the current AD
     //calculo da ad daqui em diante

    p1=(bme.readPressure()/100.0F)/p0;
    p2=(bme.readTemperature()+273.15)/t0;
    p3=p1/p2;
    p4=pow(p3,0.234959);
    p5=1-p4;
    p6=t0/0.0065;
    ad=p6*p5;
    int ad1= round(ad);
    //end of measure
    

    parentPath= databasePath + "/" + String(timestamp);

    json.set(tempPath.c_str(), String(bme.readTemperature()));
    json.set(humPath.c_str(), String(bme.readHumidity()));
    json.set(presPath.c_str(), String(bme.readPressure()/100.0F));
    json.set(adPath.c_str(), String(ad1));

    json.set(timePath, String(timestamp));
    Serial.printf("Set json... %s\n", Firebase.RTDB.setJSON(&fbdo, parentPath.c_str(), &json) ? "ok" : fbdo.errorReason().c_str());
  }


  ESP.deepSleep(60e6); // 60e6 = 30000000 microssegundos = 60 segundos

  
}

void loop(){
}
