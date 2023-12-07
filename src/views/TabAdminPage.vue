<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Admin</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Admin</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-toolbar>
        <ion-title size="small">Server list</ion-title>
      </ion-toolbar>
      <ion-list>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;Pokémon Yellow</ion-label><ion-button
            router-link="/tabs/tabConsole">-></ion-button></ion-item>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;Pokémon Yellow</ion-label><ion-button
            router-link="/tabs/tabConsole">-></ion-button></ion-item>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;Pokémon Yellow</ion-label><ion-button
            router-link="/tabs/tabConsole">-></ion-button></ion-item>
      </ion-list>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button style="min-width: 170px">Add server</ion-button>
          </ion-col>
          <ion-col>
            <ion-button style="min-width: 170px">Remove server</ion-button>
          </ion-col>
          <ion-col>
            <ion-button style="min-width: 170px">Start/Stop</ion-button>
          </ion-col>

        </ion-row>
      </ion-grid>



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
  IonButton,
  IonCheckbox
} from "@ionic/vue";
</script>




<style scoped>
ion-button {
  --width: 200px;

  --background: #93e9be;
  --background-hover: #9ce0be;
  --background-activated: #88f4be;
  --background-focused: #88f4be;

  --color: blue;

  --border-radius: 0;
  --border-color: #000;
  --border-style: solid;
  --border-width: 1px;

  --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

  --ripple-color: deeppink;

  --padding-top: 10px;
  --padding-bottom: 10px;
}</style>
