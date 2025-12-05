
# 🏆 CTO de Votre Santé Posturale
https://cto-g1v0zp7uc-nuoremacs-projects.vercel.app/
### Projet – Nuit de l’Informatique 2024 – Défi Decathlon Digital

Bienvenue dans notre application **CTO de Votre Santé Posturale**, un coach sportif intelligent destiné à aider les utilisateurs à réaliser correctement des mouvements, à prévenir les blessures et à améliorer leur posture.

L’expérience combine :

* Un **profil sportif complet** (niveau, IMC, objectifs, douleurs, etc.)
* Un **système de recommandation intelligent** (jusqu’à 15 mouvements adaptés)
* Un **avatar sportif 3D animé** (React Three Fiber)
* Des **instructions personnalisées** selon le niveau et l'état physique
* Des **avertissements de blessures potentiels**
* Une **sélection de produits Decathlon** liée aux mouvements
* Une **gamification** (XP, progression, feedback)

Ce projet répond intégralement aux **4 niveaux du défi** proposé par Decathlon Digital.

---

## 🔗 Lien de la version en ligne

👉 [https://cto-g1v0zp7uc-nuoremacs-projects.vercel.app/](https://cto-g1v0zp7uc-nuoremacs-projects.vercel.app/)


---https://cto-g1v0zp7uc-nuoremacs-projects.vercel.app/

## 📌 Fonctionnalités principales

### ✔ Niveau 1 : Profilage sportif

* Nom, genre, taille, poids
* Calcul de l’IMC et classification automatique
* Niveau, sports pratiqués, objectifs sportifs
* Contraintes articulaires (genoux, dos, épaules…)

👉 Ce profil sert à personnaliser **toutes les recommandations**.

---

### ✔ Niveau 2 : Instructions personnalisées

Chaque mouvement propose :

* Des étapes adaptées au niveau (débutant → avancé)
* Une checklist interactive (gagnant de l’XP)
* Des avertissements basés sur les contraintes de l’utilisateur

---

### ✔ Niveau 3 : Illustration & Avatar 3D

* Avatar sportif 3D stylisé avec animation dynamique :

  * squat
  * push-up
  * plank
  * yoga warrior
  * glute bridge
  * step-up
* Mise en évidence **des articulations à risque** (couleur rouge)
* Caméra interactive : rotation et zoom (OrbitControls)

---

### ✔ Niveau 4 : Sélection de produits Decathlon

Chaque mouvement propose :

* Des équipements pertinents : tapis, bandes, blocs, etc.
* Un lien direct vers Decathlon.fr

---

## 🚀 Instructions pour lancer le projet

Ce projet utilise **React (Vite)** et **React Three Fiber**.

### 1️⃣ Prérequis

Installer Node.js :
[https://nodejs.org](https://nodejs.org)

### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Lancer le projet

```bash
npm run dev
```

L’application se lancera à :
👉 [http://localhost:5173/](http://localhost:5173/)

### 4️⃣ Build production

```bash
npm run build
```

### 5️⃣ Aperçu avant déploiement

```bash
npm run preview
```

---

## 🧠 Choix techniques

### ⚛️ **React + Vite**

* Rapidité
* Hot reload efficace
* Architecture modulaire propre

### 🎨 **CSS design avancé**

* Glassmorphism
* Animations 3D CSS
* Interface gamifiée (XP, badges, transitions)

### 🏋️ **React Three Fiber + Drei**

* Avatar sportif 3D animé
* Animations procédurales en temps réel
* Gestion des ombres, lumières, effets visuels
* Mise en évidence des articulations à risque

### 📦 **Contexte React pour le profil**

* Stockage centralisé du profil utilisateur
* Synchronisation avec les recommandations et l’avatar 3D

### 🔍 **Système de recommandation intelligent**

Chaque mouvement est classé selon :

* Le niveau sportif
* L’objectif (force, mobilité, endurance, douleur)
* L’IMC
* Les articulations sensibles
* L’intensité du mouvement

👉 On affiche **les 15 meilleurs mouvements** adaptés au profil.

---

## 🚧 Difficultés rencontrées

### 1. Avatar 3D sportif réaliste

* Création d’un modèle modulaire (torse, jambes, bras, tête)
* Animations en fonction des mouvements sélectionnés
* Mise en valeur des zones articulaires stressées
* Optimisations performance (ombres / éclairage)

### 2. Algorithme de recommandation

* Pondération des critères (contrainte + IMC + niveau)
* Gestion des conflits (ex : bon mouvement mais risqué pour les genoux)

### 3. Synchronisation Profil ↔ Recommandations ↔ Avatar 3D

* Mise à jour instantanée de l’affichage
* Cohérence des avertissements et des animations

### 4. Design & expérience utilisateur

* Interface moderne, intuitive et responsive
* Effets visuels suffisamment professionnels pour un défi Decathlon Digital

---

## 📚 Architecture du code

```
src/
│── components/
│     ├── Quiz.jsx                    → Profil sportif + IMC
│     ├── MovementSelector.jsx        → Recommandations intelligentes
│     ├── InstructionsPanel.jsx       → Étapes + avertissements + XP
│     ├── Visualizer3D.jsx            → Avatar sportif 3D animé
│     ├── ShopCarousel.jsx            → Produits Decathlon
│
│── data/
│     └── movements.js                → Base des mouvements, risques, équipements
│
│── context/
│     └── ProfileContext.jsx          → Gestion globale de l’utilisateur
│
│── styles/                           → CSS modularisé (Glass, 3D, animations)
│── App.jsx
│── main.jsx
```

---

## 👥 Équipe (à personnaliser)

* Développeur Front-End
* Designer UI/UX
* Spécialiste Avatar 3D
* Responsable algorithmes & recommandations
* Intégration & tests

---

## 🏁 Conclusion

Notre projet **CTO de Votre Santé Posturale** fournit :

* Une expérience immersive
* Un coaching sportif personnalisé
* Une visualisation 3D moderne
* Une prévention active des blessures
* Une intégration cohérente avec Decathlon

Il répond totalement à l’esprit du défi : **sport + technologie + bien-être utilisateur**.

---

