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

        <!-- https://stackoverflow.com/questions/69993554/how-to-pass-id-to-modal-window-component -->
        <!-- https://devpress.csdn.net/vue/62f0d3647e66823466183440.html -->
        
        <!-- TODO: https://vuejs.org/guide/essentials/template-refs.html -->
        <!-- create a loop through banned user list received from the server -->
        <!-- :ref = "(el) => { `banButton-{{ banned.uuid }}` }" -->
          <ion-item v-for="banneduser in  banlist " ref="itemRefs">
            <ion-checkbox></ion-checkbox>
            <ion-label>&nbsp;&nbsp;&nbsp;{{ banneduser.name }}</ion-label>
            <ion-label>&nbsp;&nbsp;&nbsp;{{ banneduser.uuid }}</ion-label>
            <ion-button :id="`open-modal-ban-{{banneduser.uuid}}`" :data-value="banneduser.uuid">
              ban
            </ion-button>
          </ion-item>

        <ion-item>
          <ion-input label="Username" :autofocus=" true "></ion-input>
          <ion-button style="min-width: 170px">Add user</ion-button>
        </ion-item>
      </ion-list>


      <ion-modal v-for="banneduser in  banlist" :trigger="`open-modal-ban-{{banneduser.uuid}}`">
            @willDismiss=" onWillDismiss "
            <ion-header>
              <ion-toolbar>
                <ion-buttons slot="start">
                  <ion-button @click="cancel()">Cancel</ion-button>
                </ion-buttons>
                <ion-title>Ban {{banneduser.name}}</ion-title>
                <ion-buttons slot="end">
                  <ion-button :strong=" true " @click="confirm('a123')">
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




      <ion-list :class=" { blocklistClass1 } ">
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

const banlist = ref([
  {
    "uuid": "b8975bfe-dcae-382a-a667-c8b5705317ee",
    "name": "wrewr",
    "created": "2023-12-07 18:36:47 +0100",
    "source": "Server",
    "expires": "forever",
    "reason": "we"
  },
  {
    "uuid": "6b01532f-c6ef-3d8f-9fb2-3cff8d05102f",
    "name": "wrefds",
    "created": "2023-12-07 18:37:22 +0100",
    "source": "Server",
    "expires": "forever",
    "reason": "gh 12"
  },
  {
    "uuid": "fd02eccc-07af-40db-b373-4f1d58e7ece8",
    "name": "SFW3",
    "created": "2023-12-07 18:36:43 +0100",
    "source": "Server",
    "expires": "forever",
    "reason": "Banned by an operator."
  },
  {
    "uuid": "3f20ea91-29e1-4b9b-8e3c-d5f3d5a3ae2c",
    "name": "dfgdd",
    "created": "2023-12-07 18:36:40 +0100",
    "source": "Server",
    "expires": "forever",
    "reason": "Banned by an operator."
  }
])

const itemRefs = ref([])


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



