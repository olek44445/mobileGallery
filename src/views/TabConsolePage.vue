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



      <!-- ALLOW LIST -->
      <ion-list>
        <ion-toolbar>
          <ion-title size="small">Allow list</ion-title>
        </ion-toolbar>
        <ion-item v-for="alloweduser in allowlist" ref="itemRefs">
          <ion-checkbox></ion-checkbox>
          <ion-label>&nbsp;&nbsp;&nbsp;{{ alloweduser.name }}</ion-label>
          <ion-label>{{ alloweduser.uuid }}</ion-label>

          <ion-button :id="`open-modal-ban-{{alloweduser.uuid}}`" :data-value="alloweduser.uuid">
            ban
          </ion-button>
        </ion-item>

        <ion-item>
          <ion-input label="Username" :autofocus="true"></ion-input>
          <ion-button style="min-width: 170px">Add user</ion-button>
        </ion-item>
      </ion-list>


      <!-- TODO: MODAL LIST -->
      <ion-modal v-for="banneduser in  banlist" :trigger="`open-modal-ban-{{banneduser.uuid}}`">
        @willDismiss=" onWillDismiss "
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancel</ion-button>
            </ion-buttons>
            <ion-title>Ban {{ banneduser.name }}</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="confirm('a123')">
                Confirm
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-item>
            <ion-input label="Enter ban-reason" label-placement="stacked" ref="input" type="text"
              placeholder="ban-reason">
            </ion-input>
          </ion-item>
        </ion-content>
      </ion-modal>

      <!-- TODO: MODAL LIST -->
      <ion-modal v-for="banneduser in  banlist" :trigger="`open-modal-ban-{{banneduser.uuid}}`">
        @willDismiss=" onWillDismiss "
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancel</ion-button>
            </ion-buttons>
            <ion-title>Ban {{ banneduser.name }}</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="confirm('a123')">
                Confirm
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-item>
            <ion-input label="Enter ban-reason" label-placement="stacked" ref="input" type="text"
              placeholder="ban-reason">
            </ion-input>
          </ion-item>
        </ion-content>
      </ion-modal>


      <!-- BLOCK LIST -->
      <ion-toolbar>
        <ion-title size="small">Block list</ion-title>
      </ion-toolbar>
      <ion-list v-for="banneduser in banlist" :class="{ blocklistClass1 }">

        <ion-item>
          <ion-checkbox></ion-checkbox>
          <ion-label>&nbsp;&nbsp;&nbsp;{{ banneduser.name }}</ion-label>
          <ion-label>{{ banneduser.uuid }}</ion-label>
          <ion-button router-link="/tabs/tabConsole">
            allow
          </ion-button>
        </ion-item>

      </ion-list>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-button style="min-width: 170px">Allow list</ion-button>
          </ion-col>
          <ion-col>
            <ion-button id="id-blocklist" style="min-width: 170px" @click="toggleBlocklist($event)">
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
const fetch = require('sync-fetch')

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonButton,
  IonButtons,
} from '@ionic/vue';

import { maskito as vMaskito } from '@maskito/vue';
import { ref } from 'vue';
import { OverlayEventDetail } from '@ionic/core/components';


const message = ref('This modal example uses triggers to automatically open a modal when the button is clicked.');
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
const modal = ref();
const input = ref();

// TODO: OPTIMIZATION - make fetch async

// async function getData() {
//   const response = await fetch("http://127.0.0.1:3000/banned-players");
//   banlistLive = await response.json();
//   console.log('fetching server data');
//   console.log(banlistLive);
// }
// getData();

// FETCH ALLOW LIST
var allowlistLive = fetch('http://127.0.0.1:3000/whitelist', {
  headers: {
    Accept: 'application/json'
  }
}).json()
const allowlist = ref(allowlistLive);
console.log('fetched server data');
console.log(ref(allowlist));
//END OF FETCH ALLOW LIST

// FETCH BLOCK LIST
var banlistLive = fetch('http://127.0.0.1:3000/banned-players', {
  headers: {
    Accept: 'application/json'
  }
}).json()
const banlist = ref(banlistLive);
console.log('fetched server data');
console.log(ref(banlist));
//END OF FETCH BLOCK LIST


const itemRefs = ref([]);


const cancel = () => modal.value.$el.dismiss(null, 'cancel');

const confirm = (username: string) => {
  const banreason = input.value.$el.value;
  modal.value.$el.dismiss(banreason, 'confirm');
  console.log(username, banreason);
  // TODO: issue server banUser request
};

const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
  if (ev.detail.role === 'confirm') {
    message.value = `Hello, ${ev.detail.data}!`;
  }
};

</script>



<!-- https://stackoverflow.com/questions/69993554/how-to-pass-id-to-modal-window-component -->
<!-- https://devpress.csdn.net/vue/62f0d3647e66823466183440.html -->

<!-- TODO: https://vuejs.org/guide/essentials/template-refs.html -->
<!-- create a loop through banned user list received from the server -->
<!-- :ref = "(el) => { `banButton-{{ banned.uuid }}` }" -->
