<template>
  <div id="inicio">
    <!-- Informações de life do jogador e do monstro -->
    <div class="info-vida">
      <div class="jogador">
        <h1>Jogador</h1>
        <div class="barra-vida">
          <div
            :style="{width: valorJogador + '%'}"
            class="preenche-barra"
            :class="{ 'preenche-barra-low': valorJogador < 30 }"
          ></div> 
        </div>
        <h5>{{ valorJogador }} %</h5>
      </div>
      <div class="monstro">
        <h1>Monstro</h1>
        <div class="barra-vida">
          <div
            :style="{width: valorMonstro + '%'}"
            class="preenche-barra"
            :class="{ 'preenche-barra-low': valorMonstro < 30 }"
          ></div>
        </div>
        <h5>{{ valorMonstro }} %</h5>
      </div>
    </div>
    <!-- Fim Informações de life do jogador e do monstro -->
    
    <!-- Controles para iniciar e jogar o jogo -->
    <div class="info-controles">
      <div class="comecar" v-if="novoJogo">
        <button class="btn novoJogo" @click="novoJogo = !novoJogo">Novo Jogo</button>
      </div>
      <div class="jogando" v-else>
        <button class="btn ataque" @click="ataque()">Ataque</button>
        <button class="btn ataqueEspecial">Ataque Especial</button>
        <button class="btn curar">Curar</button>
        <button class="btn desistir" @click="novoJogo = !novoJogo">Desistir</button>
      </div>
    </div>
    <!-- Fim Controles para iniciar e jogar o jogo -->

    <div class="info-logs"></div>
  </div>
</template>
<script src="./Inicio.js" />
<style lang="scss" src="./Inicio.scss" />