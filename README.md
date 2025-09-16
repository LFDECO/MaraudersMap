# MaraudersMap
# Marauder’s Map AI  
An AI-powered real-time public transport tracking system for Tier-2 cities and towns  

![Banner](https://img.shields.io/badge/Smart%20India%20Hackathon-2025-orange)  
![License](https://img.shields.io/badge/License-MIT-green)  
![Status](https://img.shields.io/badge/Status-Prototype-blue)  

---

## About the Project  
Marauder’s Map AI, developed by **Half-Dozen Hooligans** for **Smart India Hackathon 2025**, is a real-time, AI-driven bus tracking system secured with blockchain and designed for small and medium cities.  

Inspired by the Marauder’s Map from the Harry Potter series, this solution provides commuters with reliable access to live public transport data, enabling them to know where their bus is at any given moment.  

### Key Highlights
- Driver App – Smartphone-based GPS and geo-fencing for live bus tracking  
- Passenger App – Real-time location updates, ETA predictions, AR navigation, and crowd density indicators  
- Admin Dashboard – Fleet monitoring, predictive alerts, route optimization, and analytics  
- Blockchain Security – Hyperledger Fabric ensures tamper-proof transport records  
- Offline-first Design – Functions effectively even in low-network regions with SMS fallback  

---

## Problem Statement
**ID:** 25013  
**Title:** Real-Time Public Transport Tracking for Small Cities  
**Theme:** Transportation & Logistics  
**Category:** Software  

Public transport in smaller cities often faces the following challenges:  
- Uncertainty in bus arrival times  
- Lack of rider confidence and trust in services  
- Inability to compete with private transport solutions  

Marauder’s Map AI addresses these challenges by reducing commuter stress, increasing ridership confidence, and promoting sustainable, eco-friendly transport adoption.  

---

## Technology Stack
- **Frontend:** Flutter (cross-platform)  
- **Backend:** Node.js / Django (microservices, Kubernetes auto-scaling)  
- **Database:** PostgreSQL + TimescaleDB (for ETA and analytics)  
- **Mapping:** OpenStreetMap + Google Maps API  
- **AI/ML Models:** LSTM and Graph Neural Networks (ETA prediction)  
- **Blockchain:** Hyperledger Fabric  
- **Deployment:** Cloud-native with green hosting  

---

## Features
- Real-time location updates every 5–10 seconds  
- AI-powered alerts for delays, diversions, and congestion  
- Augmented Reality navigation to nearest bus stops  
- Optimized for low-bandwidth and low-storage environments  
- Gamified “Green sMiles” rewards for eco-friendly commuting  
- AES-256 encryption with blockchain-secured transport records  

---

## System Architecture
```text
Driver App (GPS) → Cloud Backend → Passenger App + Admin Dashboard
                ↘ AI/ML Engine → Predictive ETA & Alerts
                ↘ Blockchain Ledger → Secure Data Logs

