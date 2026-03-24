# 🚀 Gestionnaire de Contacts Intelligent

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-brightgreen?style=for-the-badge&logo=spring-boot)
![Kafka](https://img.shields.io/badge/Apache_Kafka-Event--Driven-black?style=for-the-badge&logo=apache-kafka)
![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-blue?style=for-the-badge&logo=kubernetes)

## 📌 À propos du projet
Le **Gestionnaire de Contacts Intelligent** est une application fullstack conçue pour démontrer la maîtrise du cycle de développement moderne. Ce projet va au-delà d'un simple CRUD : il explore les problématiques de scalabilité, d'architecture événementielle et de déploiement cloud natif.

L'objectif est d'appliquer les standards de l'industrie (DevOps, Microservices, Sécurité) au sein d'un environnement auto-hébergé complexe.

### 💡 Fonctionnalités Clés
* **Authentification Hybride** : Connexion classique et Social Login (Google OAuth2) via Spring Security.
* **Notifications Asynchrones** : Système d'envoi d'emails découplé via **Apache Kafka** pour une réactivité maximale.
* **Gestion de Profils** : Téléchargement et stockage optimisé des images via **Cloudinary**.
* **Interface Réactive** : Frontend dynamique avec **Thymeleaf**, **Tailwind CSS** et composants **Flowbite**.

---

## 🏗️ Architecture & Infrastructure

### ☁️ Cloud "On-Premise" (DevOps)
Le projet simule un environnement cloud de production grâce à une infrastructure robuste :
* **Hôte** : Alienware (Intel i7, 32 Go RAM).
* **Virtualisation** : Ubuntu 24 servant d'hyperviseur avec **KVM/Libvirt**.
* **Orchestration** : Déploiement conteneurisé via **Docker** et gestion de cluster par **Kubernetes**.



### ⚙️ Stack Technique
* **Backend** : Java 17, Spring Boot 3 (MVC, Data JPA, Security, Validation).
* **Messaging** : Apache Kafka (Microservice dédié aux mails).
* **Base de données** : MySQL.
* **Frontend** : Thymeleaf, Tailwind CSS, Flowbite.
* **Outils** : Maven, VS Code, Docker.

---

## 📊 Flux de travail Événementiel
L'application utilise un modèle "Produce-Consume" pour l'envoi des mails, garantissant que le service principal ne subit aucune latence lors des interactions utilisateurs.



---

## 🛠️ Installation et Configuration

### Pré-requis
* Java 17 installé
* Docker & Kubernetes (ou Minikube pour le test)

### Lancement via Docker Compose
1. **Clonage du dépôt** :
   ```bash
   docker-compose up --build
