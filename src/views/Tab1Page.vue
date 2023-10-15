<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item>
          <ion-img
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></ion-img>
          <ion-label>Pokémon Yellow</ion-label>
        </ion-item>
        <ion-item>
          <ion-img
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></ion-img>
          <ion-label>Mega Man X</ion-label>
        </ion-item>
        <ion-item>
          <ion-img
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></ion-img>
          <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
          <ion-img
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></ion-img>
          <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
          <ion-img
            src="https://docs-demo.ionic.io/assets/madison.jpg"
            alt="The Wisconsin State Capitol building in Madison, WI at night"
          ></ion-img>
          <ion-label>Super Mario World</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonList,
  IonImg,
} from "@ionic/vue";
</script>
