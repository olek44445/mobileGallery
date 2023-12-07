<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tabAdmin" href="/tabs/tabAdmin">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Admin</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tabConsole" href="/tabs/tabConsole">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Console</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tabStats" href="/tabs/tabStats">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Stats</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>

