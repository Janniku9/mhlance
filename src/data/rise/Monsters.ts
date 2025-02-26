import type { Monster } from '../../types/Monsters';

import aknosom from '../../assets/rise/monsters/aknosom.png';
import almudron from '../../assets/rise/monsters/almudron.png';
import amatsu from '../../assets/rise/monsters/amatsu.png';
import anjanath from '../../assets/rise/monsters/anjanath.png';
import apex_arzuros from '../../assets/rise/monsters/apex_arzuros.png';
import apex_diablos from '../../assets/rise/monsters/apex_diablos.png';
import apex_mizutsune from '../../assets/rise/monsters/apex_mizutsune.png';
import apex_rathalos from '../../assets/rise/monsters/apex_rathalos.png';
import apex_rathian from '../../assets/rise/monsters/apex_rathian.png';
import apex_zinogre from '../../assets/rise/monsters/apex_zinogre.png';
import arzuros from '../../assets/rise/monsters/arzuros.png';
import astalos from '../../assets/rise/monsters/astalos.png';
import aurora_somnacanth from '../../assets/rise/monsters/aurora_somnacanth.png';
import barioth from '../../assets/rise/monsters/barioth.png';
import barroth from '../../assets/rise/monsters/barroth.png';
import basarios from '../../assets/rise/monsters/basarios.png';
import bazelgeuse from '../../assets/rise/monsters/bazelgeuse.png';
import bishaten from '../../assets/rise/monsters/bishaten.png';
import blood_orange_bishaten from '../../assets/rise/monsters/blood_orange_bishaten.png';
import chameleos from '../../assets/rise/monsters/chameleos.png';
import chaotic_gore_magala from '../../assets/rise/monsters/chaotic_gore_magala.png';
import crimson_glow_valstrax from '../../assets/rise/monsters/crimson_glow_valstrax.png';
import daimyo_hermitaur from '../../assets/rise/monsters/daimyo_hermitaur.png';
import diablos from '../../assets/rise/monsters/diablos.png';
import espinas from '../../assets/rise/monsters/espinas.png';
import flaming_espinas from '../../assets/rise/monsters/flaming_espinas.png';
import furious_rajang from '../../assets/rise/monsters/furious_rajang.png';
import gaismagorm from '../../assets/rise/monsters/gaismagorm.png';
import garangolm from '../../assets/rise/monsters/garangolm.png';
import gold_rathian from '../../assets/rise/monsters/gold_rathian.png';
import gore_magala from '../../assets/rise/monsters/gore_magala.png';
import goss_harag from '../../assets/rise/monsters/goss_harag.png';
import great_baggi from '../../assets/rise/monsters/great_baggi.png';
import great_izuchi from '../../assets/rise/monsters/great_izuchi.png';
import great_wroggi from '../../assets/rise/monsters/great_wroggi.png';
import jyuratodus from '../../assets/rise/monsters/jyuratodus.png';
import khezu from '../../assets/rise/monsters/khezu.png';
import kulu_ya_ku from '../../assets/rise/monsters/kulu-ya-ku.png';
import kushala_daora from '../../assets/rise/monsters/kushala_daora.png';
import lagombi from '../../assets/rise/monsters/lagombi.png';
import lucent_nargacuga from '../../assets/rise/monsters/lucent_nargacuga.png';
import lunagaron from '../../assets/rise/monsters/lunagaron.png';
import magma_almudron from '../../assets/rise/monsters/magma_almudron.png';
import magnamalo from '../../assets/rise/monsters/magnamalo.png';
import malzeno from '../../assets/rise/monsters/malzeno.png';
import mizutsune from '../../assets/rise/monsters/mizutsune.png';
import nargacuga from '../../assets/rise/monsters/mizutsune.png';
import narwa_the_allmother from '../../assets/rise/monsters/narwa_the_allmother.png';
import primordial_malzeno from '../../assets/rise/monsters/primordial_malzeno.png';
import pukei_pukei from '../../assets/rise/monsters/pukei-pukei.png';
import pyre_rakna_kadaki from '../../assets/rise/monsters/pyre_rakna-kadaki.png';
import rajang from '../../assets/rise/monsters/rajang.png';
import rakna_kadaki from '../../assets/rise/monsters/rakna-kadaki.png';
import rathalos from '../../assets/rise/monsters/rathalos.png';
import rathian from '../../assets/rise/monsters/rathian.png';
import risen_chameleos from '../../assets/rise/monsters/risen_chameleos.png';
import risen_crimson_glow_valstrax from '../../assets/rise/monsters/risen_valstrax.png';
import risen_kushala_daora from '../../assets/rise/monsters/risen_kushala_daora.png';
import risen_shagaru_magala from '../../assets/rise/monsters/risen_shagaru_magala.png';
import risen_teostra from '../../assets/rise/monsters/risen_teostra.png';
import risen_valstrax from '../../assets/rise/monsters/risen_valstrax.png';
import royal_ludroth from '../../assets/rise/monsters/royal_ludroth.png';
import scorned_magnamalo from '../../assets/rise/monsters/scorned_magnamalo.png';
import seething_bazelgeuse from '../../assets/rise/monsters/seething_bazelgeuse.png';
import seregios from '../../assets/rise/monsters/seregios.png';
import shagaru_magala from '../../assets/rise/monsters/shagaru_magala.png';
import shogun_ceanataur from '../../assets/rise/monsters/shogun_ceanataur.png';
import silver_rathalos from '../../assets/rise/monsters/silver_rathalos.png';
import somnacanth from '../../assets/rise/monsters/somnacanth.png';
import teostra from '../../assets/rise/monsters/teostra.png';
import tetranadon from '../../assets/rise/monsters/tetranadon.png';
import tigrex from '../../assets/rise/monsters/tigrex.png';
import tobi_kadachi from '../../assets/rise/monsters/tobi-kadachi.png';
import velkhana from '../../assets/rise/monsters/velkhana.png';
import violet_mizutsune from '../../assets/rise/monsters/violet_mizutsune.png';
import volvidon from '../../assets/rise/monsters/volvidon.png';
import wind_serpent_ibushi from '../../assets/rise/monsters/wind_serpent_ibushi.png';
import zinogre from '../../assets/rise/monsters/zinogre.png';

export type RiseMonsterNames = (typeof riseMonsters)[number]['name'];

export const riseMonsters: Monster[] = [
  {
    name: 'Aknosom',
    image: aknosom,
  },
  {
    name: 'Almudron',
    image: almudron,
  },
  {
    name: 'Amatsu',
    image: amatsu,
  },
  {
    name: 'Anjanath',
    image: anjanath,
  },
  {
    name: 'Apex Arzuros',
    image: apex_arzuros,
  },
  {
    name: 'Apex Diablos',
    image: apex_diablos,
  },
  {
    name: 'Apex Mizutsune',
    image: apex_mizutsune,
  },
  {
    name: 'Apex Rathalos',
    image: apex_rathalos,
  },
  {
    name: 'Apex Rathian',
    image: apex_rathian,
  },
  {
    name: 'Apex Zinogre',
    image: apex_zinogre,
  },
  {
    name: 'Arzuros',
    image: arzuros,
  },
  {
    name: 'Astalos',
    image: astalos,
  },
  {
    name: 'Aurora Somnacanth',
    image: aurora_somnacanth,
  },
  {
    name: 'Barioth',
    image: barioth,
  },
  {
    name: 'Barroth',
    image: barroth,
  },
  {
    name: 'Basarios',
    image: basarios,
  },
  {
    name: 'Bazelgeuse',
    image: bazelgeuse,
  },
  {
    name: 'Bishaten',
    image: bishaten,
  },
  {
    name: 'Blood Orange Bishaten',
    image: blood_orange_bishaten,
  },
  {
    name: 'Chameleos',
    image: chameleos,
  },
  {
    name: 'Chaotic Gore Magala',
    image: chaotic_gore_magala,
  },
  {
    name: 'Crimson Glow Valstrax',
    image: crimson_glow_valstrax,
  },
  {
    name: 'Daimyo Hermitaur',
    image: daimyo_hermitaur,
  },
  {
    name: 'Diablos',
    image: diablos,
  },
  {
    name: 'Espinas',
    image: espinas,
  },
  {
    name: 'Flaming Espinas',
    image: flaming_espinas,
  },
  {
    name: 'Furious Rajang',
    image: furious_rajang,
  },
  {
    name: 'Gaismagorm',
    image: gaismagorm,
  },
  {
    name: 'Garangolm',
    image: garangolm,
  },
  {
    name: 'Gold Rathian',
    image: gold_rathian,
  },
  {
    name: 'Gore Magala',
    image: gore_magala,
  },
  {
    name: 'Goss Harag',
    image: goss_harag,
  },
  {
    name: 'Great Baggi',
    image: great_baggi,
  },
  {
    name: 'Great Izuchi',
    image: great_izuchi,
  },
  {
    name: 'Great Wroggi',
    image: great_wroggi,
  },
  {
    name: 'Jyuratodus',
    image: jyuratodus,
  },
  {
    name: 'Khezu',
    image: khezu,
  },
  {
    name: 'Kulu-Ya-Ku',
    image: kulu_ya_ku,
  },
  {
    name: 'Kushala Daora',
    image: kushala_daora,
  },
  {
    name: 'Lagombi',
    image: lagombi,
  },
  {
    name: 'Lucent Nargacuga',
    image: lucent_nargacuga,
  },
  {
    name: 'Lunagaron',
    image: lunagaron,
  },
  {
    name: 'Magma Almudron',
    image: magma_almudron,
  },
  {
    name: 'Magnamalo',
    image: magnamalo,
  },
  {
    name: 'Malzeno',
    image: malzeno,
  },
  {
    name: 'Mizutsune',
    image: mizutsune,
  },
  {
    name: 'Nargacuga',
    image: nargacuga,
  },
  {
    name: 'Narwa The Allmother',
    image: narwa_the_allmother,
  },
  {
    name: 'Primordial Malzeno',
    image: primordial_malzeno,
  },
  {
    name: 'Pukei-Pukei',
    image: pukei_pukei,
  },
  {
    name: 'Pyre Rakna-Kadaki',
    image: pyre_rakna_kadaki,
  },
  {
    name: 'Rajang',
    image: rajang,
  },
  {
    name: 'Rakna-Kadaki',
    image: rakna_kadaki,
  },
  {
    name: 'Rathalos',
    image: rathalos,
  },
  {
    name: 'Rathian',
    image: rathian,
  },
  {
    name: 'Risen Chameleos',
    image: risen_chameleos,
  },
  {
    name: 'Risen Crimson Glow Valstrax',
    image: risen_crimson_glow_valstrax,
  },
  {
    name: 'Risen Kushala Daora',
    image: risen_kushala_daora,
  },
  {
    name: 'Risen Shagaru Magala',
    image: risen_shagaru_magala,
  },
  {
    name: 'Risen Teostra',
    image: risen_teostra,
  },
  {
    name: 'Risen Valstrax',
    image: risen_valstrax,
  },
  {
    name: 'Royal Ludroth',
    image: royal_ludroth,
  },
  {
    name: 'Scorned Magnamalo',
    image: scorned_magnamalo,
  },
  {
    name: 'Seething Bazelgeuse',
    image: seething_bazelgeuse,
  },
  {
    name: 'Seregios',
    image: seregios,
  },
  {
    name: 'Shagaru Magala',
    image: shagaru_magala,
  },
  {
    name: 'Shogun Ceanataur',
    image: shogun_ceanataur,
  },
  {
    name: 'Silver Rathalos',
    image: silver_rathalos,
  },
  {
    name: 'Somnacanth',
    image: somnacanth,
  },
  {
    name: 'Teostra',
    image: teostra,
  },
  {
    name: 'Tetranadon',
    image: tetranadon,
  },
  {
    name: 'Tigrex',
    image: tigrex,
  },
  {
    name: 'Tobi-Kadachi',
    image: tobi_kadachi,
  },
  {
    name: 'Velkhana',
    image: velkhana,
  },
  {
    name: 'Violet Mizutsune',
    image: violet_mizutsune,
  },
  {
    name: 'Volvidon',
    image: volvidon,
  },
  {
    name: 'Wind Serpent Ibushi',
    image: wind_serpent_ibushi,
  },
  {
    name: 'Zinogre',
    image: zinogre,
  },
];
