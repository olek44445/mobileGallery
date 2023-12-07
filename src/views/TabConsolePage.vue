<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Console</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Console</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-toolbar>
          <ion-title size="small">Allow list</ion-title>
        </ion-toolbar>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;User 123</ion-label><ion-button
            router-link="/tabs/tabConsole">ban</ion-button></ion-item>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;User jacekplacek</ion-label><ion-button
            router-link="/tabs/tabConsole">ban</ion-button></ion-item>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;User xyz</ion-label><ion-button
            router-link="/tabs/tabConsole">ban</ion-button></ion-item>
        <ion-item>
          <ion-input label="Username" :autofocus="true"></ion-input>
          <ion-button style="min-width: 170px">Add user</ion-button>
        </ion-item>
      </ion-list>

      <ion-list
        :class="{ blocklistClass1 }"
      >
        <ion-toolbar>
          <ion-title size="small">Block list</ion-title>
        </ion-toolbar>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;User 123</ion-label><ion-button
            router-link="/tabs/tabConsole">ban</ion-button></ion-item>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;User jacekplacek</ion-label><ion-button
            router-link="/tabs/tabConsole">ban</ion-button></ion-item>
        <ion-item><ion-checkbox></ion-checkbox><ion-label>&nbsp;&nbsp;&nbsp;User xyz</ion-label><ion-button
            router-link="/tabs/tabConsole">ban</ion-button></ion-item>

      </ion-list>
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button style="min-width: 170px">Allow list</ion-button>
          </ion-col>
          <ion-col>
            <ion-button
              id="id-blocklist"
              style="min-width: 170px"
              @click="toggleBlocklist($event)"
            >
            Block list
          </ion-button>
          </ion-col>
          <ion-col>
            <ion-button style="min-width: 170px">Server log</ion-button>
          </ion-col>

        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList } from '@ionic/vue';

import { maskito as vMaskito } from '@maskito/vue';


const blocklistClass = "ion-hide";

function toggleBlocklist(event) {
  console.log('toggleBlocklist');
};


function handleChange(event) {
  console.log('Current value:', JSON.stringify(event));
  console.log('Current value:', event);
};

const phoneOptions = {
  mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  elementPredicate: (el: HTMLIonInputElement) => {
    return new Promise((resolve) => {
      requestAnimationFrame(async () => {
        const input = await el.getInputElement();
        resolve(input);
      });
    });
  },
};


</script>



