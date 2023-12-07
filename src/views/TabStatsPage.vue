<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Stats</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Stats</ion-title>
        </ion-toolbar>
      </ion-header>

      
  <ion-list>
    <ion-item>
      <ion-input
        label="Alphanumeric Characters"
        :value="inputModel"
        @ionInput="onInput($event)"
        ref="ionInputEl"
      ></ion-input>
    </ion-item>
  </ion-list>




</ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { ref } from 'vue';

import { IonInput, IonItem, IonList } from '@ionic/vue';
const ionInputEl = ref();
const inputModel = ref('');
const onInput = (event: { target: any; }) => {
  const value = event.target!.value;

  console.log(value);
  console.log(event);

  // Removes non alphanumeric characters
  const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '*');

  /**
   * Update both the state variable and
   * the component to keep them in sync.
   */
  inputModel.value = filteredValue;

  const inputCmp = ionInputEl.value;
  if (inputCmp !== undefined) {
    inputCmp.$el.value = filteredValue;
  }
};
</script>
