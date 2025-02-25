import type { Monster } from '../../types/Monsters';

import acidicGlavenus from '../../assets/world/monsters/acidic_glavenus.png';
import alatreon from '../../assets/world/monsters/alatreon.png';
import ancientLeshen from '../../assets/world/monsters/ancient_leshen.png';
import anjanath from '../../assets/world/monsters/anjanath.png';
import azureRathalos from '../../assets/world/monsters/azure_rathalos.png';
import banbaro from '../../assets/world/monsters/banbaro.png';
import barioth from '../../assets/world/monsters/barioth.png';
import barroth from '../../assets/world/monsters/barroth.png';
import bazelgeuse from '../../assets/world/monsters/bazelgeuse.png';
import behemoth from '../../assets/world/monsters/behemoth.png';
import beotodus from '../../assets/world/monsters/beotodus.png';
import blackDiablos from '../../assets/world/monsters/black_diablos.png';
import blackveilVaalHazak from '../../assets/world/monsters/blackveil_vaal_hazak.png';
import brachydios from '../../assets/world/monsters/brachydios.png';
import bruteTigrex from '../../assets/world/monsters/brute_tigrex.png';
import coralPukeiPukei from '../../assets/world/monsters/coral_pukei-pukei.png';
import deviljho from '../../assets/world/monsters/deviljho.png';
import diablos from '../../assets/world/monsters/diablos.png';
import dodogama from '../../assets/world/monsters/dodogama.png';
import ebonyOdogaron from '../../assets/world/monsters/ebony_odogaron.png';
import fatalis from '../../assets/world/monsters/fatalis.png';
import frostfangBarioth from '../../assets/world/monsters/frostfang_barioth.png';
import fulgurAnjanath from '../../assets/world/monsters/fulgur_anjanath.png';
import furiousRajang from '../../assets/world/monsters/furious_rajang.png';
import glavenus from '../../assets/world/monsters/glavenus.png';
import goldRathian from '../../assets/world/monsters/gold_rathian.png';
import greatGirros from '../../assets/world/monsters/great_girros.png';
import greatJagras from '../../assets/world/monsters/great_jagras.png';
import jyuratodus from '../../assets/world/monsters/jyuratodus.png';
import kirin from '../../assets/world/monsters/kirin.png';
import kuluYaKu from '../../assets/world/monsters/kulu-ya-ku.png';
import kulveTaroth from '../../assets/world/monsters/kulve_taroth.png';
import kushalaDaora from '../../assets/world/monsters/kushala_daora.png';
import lavasioth from '../../assets/world/monsters/lavasioth.png';
import legiana from '../../assets/world/monsters/legiana.png';
import leshen from '../../assets/world/monsters/leshen.png';
import lunastra from '../../assets/world/monsters/lunastra.png';
import namielle from '../../assets/world/monsters/namielle.png';
import nargacuga from '../../assets/world/monsters/nargacuga.png';
import nergigante from '../../assets/world/monsters/nergigante.png';
import nightshadePaolumu from '../../assets/world/monsters/nightshade_paolumu.png';
import odogaron from '../../assets/world/monsters/odogaron.png';
import paolumu from '../../assets/world/monsters/paolumu.png';
import pinkRathian from '../../assets/world/monsters/pink_rathian.png';
import pukeiPukei from '../../assets/world/monsters/pukei-pukei.png';
import radobaan from '../../assets/world/monsters/radobaan.png';
import ragingBrachydios from '../../assets/world/monsters/raging_brachydios.png';
import rajang from '../../assets/world/monsters/rajang.png';
import rathalos from '../../assets/world/monsters/rathalos.png';
import rathian from '../../assets/world/monsters/rathian.png';
import ruinerNergigante from '../../assets/world/monsters/ruiner_nergigante.png';
import safiJiiva from '../../assets/world/monsters/safi_jiiva.png';
import savageDeviljho from '../../assets/world/monsters/savage_deviljho.png';
import scarredYianGaruga from '../../assets/world/monsters/scarred_yian_garuga.png';
import seethingBazelgeuse from '../../assets/world/monsters/seething_bazelgeuse.png';
import sharaIshvalda from '../../assets/world/monsters/shara_ishvalda.png';
import shriekingLegiana from '../../assets/world/monsters/shrieking_legiana.png';
import silverRathalos from '../../assets/world/monsters/silver_rathalos.png';
import stygianZinogre from '../../assets/world/monsters/stygian_zinogre.png';
import teostra from '../../assets/world/monsters/teostra.png';
import tigrex from '../../assets/world/monsters/tigrex.png';
import tobiKadachi from '../../assets/world/monsters/tobi-kadachi.png';
import tzitziYaKu from '../../assets/world/monsters/tzitzi-ya-ku.png';
import uragaan from '../../assets/world/monsters/uragaan.png';
import vaalHazak from '../../assets/world/monsters/vaal_hazak.png';
import velkhana from '../../assets/world/monsters/velkhana.png';
import viperTobiKadachi from '../../assets/world/monsters/viper_tobi-kadachi.png';
import xenoJiiva from '../../assets/world/monsters/xeno_jiiva.png';
import yianGaruga from '../../assets/world/monsters/yian_garuga.png';
import zinogre from '../../assets/world/monsters/zinogre.png';
import zorahMagdaros from '../../assets/world/monsters/zorah_magdaros.png';

export type WorldMonsterNames = (typeof worldMonsters)[number]['name'];

export const worldMonsters: Monster[] = [
  {
    name: 'Acidic Glavenus',
    image: acidicGlavenus,
  },
  {
    name: 'Alatreon',
    image: alatreon,
  },
  {
    name: 'Ancient Leshen',
    image: ancientLeshen,
  },
  {
    name: 'Anjanath',
    image: anjanath,
  },
  {
    name: 'Azure Rathalos',
    image: azureRathalos,
  },
  {
    name: 'Banbaro',
    image: banbaro,
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
    name: 'Bazelgeuse',
    image: bazelgeuse,
  },
  {
    name: 'Behemoth',
    image: behemoth,
  },
  {
    name: 'Beotodus',
    image: beotodus,
  },
  {
    name: 'Black Diablos',
    image: blackDiablos,
  },
  {
    name: 'Blackveil Vaal Hazak',
    image: blackveilVaalHazak,
  },
  {
    name: 'Brachydios',
    image: brachydios,
  },
  {
    name: 'Brute Tigrex',
    image: bruteTigrex,
  },
  {
    name: 'Coral Pukei-Pukei',
    image: coralPukeiPukei,
  },
  {
    name: 'Deviljho',
    image: deviljho,
  },
  {
    name: 'Diablos',
    image: diablos,
  },
  {
    name: 'Dodogama',
    image: dodogama,
  },
  {
    name: 'Ebony Odogaron',
    image: ebonyOdogaron,
  },
  {
    name: 'Fatalis',
    image: fatalis,
  },
  {
    name: 'Frostfang Barioth',
    image: frostfangBarioth,
  },
  {
    name: 'Fulgur Anjanath',
    image: fulgurAnjanath,
  },
  {
    name: 'Furious Rajang',
    image: furiousRajang,
  },
  {
    name: 'Glavenus',
    image: glavenus,
  },
  {
    name: 'Gold Rathian',
    image: goldRathian,
  },
  {
    name: 'Great Girros',
    image: greatGirros,
  },
  {
    name: 'Great Jagras',
    image: greatJagras,
  },
  {
    name: 'Jyuratodus',
    image: jyuratodus,
  },
  {
    name: 'Kirin',
    image: kirin,
  },
  {
    name: 'Kulu-Ya-Ku',
    image: kuluYaKu,
  },
  {
    name: 'Kulve Taroth',
    image: kulveTaroth,
  },
  {
    name: 'Kushala Daora',
    image: kushalaDaora,
  },
  {
    name: 'Lavasioth',
    image: lavasioth,
  },
  {
    name: 'Legiana',
    image: legiana,
  },
  {
    name: 'Leshen',
    image: leshen,
  },
  {
    name: 'Lunastra',
    image: lunastra,
  },
  {
    name: 'Namielle',
    image: namielle,
  },
  {
    name: 'Nargacuga',
    image: nargacuga,
  },
  {
    name: 'Nergigante',
    image: nergigante,
  },
  {
    name: 'Nightshade Paolumu',
    image: nightshadePaolumu,
  },
  {
    name: 'Odogaron',
    image: odogaron,
  },
  {
    name: 'Paolumu',
    image: paolumu,
  },
  {
    name: 'Pink Rathian',
    image: pinkRathian,
  },
  {
    name: 'Pukei-Pukei',
    image: pukeiPukei,
  },
  {
    name: 'Radobaan',
    image: radobaan,
  },
  {
    name: 'Raging Brachydios',
    image: ragingBrachydios,
  },
  {
    name: 'Rajang',
    image: rajang,
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
    name: 'Ruiner Nergigante',
    image: ruinerNergigante,
  },
  {
    name: 'Safi Jiiva',
    image: safiJiiva,
  },
  {
    name: 'Savage Deviljho',
    image: savageDeviljho,
  },
  {
    name: 'Scarred Yian Garuga',
    image: scarredYianGaruga,
  },
  {
    name: 'Seething Bazelgeuse',
    image: seethingBazelgeuse,
  },
  {
    name: 'Shara Ishvalda',
    image: sharaIshvalda,
  },
  {
    name: 'Shrieking Legiana',
    image: shriekingLegiana,
  },
  {
    name: 'Silver Rathalos',
    image: silverRathalos,
  },
  {
    name: 'Stygian Zinogre',
    image: stygianZinogre,
  },
  {
    name: 'Teostra',
    image: teostra,
  },
  {
    name: 'Tigrex',
    image: tigrex,
  },
  {
    name: 'Tobi-Kadachi',
    image: tobiKadachi,
  },
  {
    name: 'Tzitzi-Ya-Ku',
    image: tzitziYaKu,
  },
  {
    name: 'Uragaan',
    image: uragaan,
  },
  {
    name: 'Vaal Hazak',
    image: vaalHazak,
  },
  {
    name: 'Velkhana',
    image: velkhana,
  },
  {
    name: 'Viper Tobi-Kadachi',
    image: viperTobiKadachi,
  },
  {
    name: 'Xeno Jiiva',
    image: xenoJiiva,
  },
  {
    name: 'Yian Garuga',
    image: yianGaruga,
  },
  {
    name: 'Zinogre',
    image: zinogre,
  },
  {
    name: 'Zorah Magdaros',
    image: zorahMagdaros,
  },
];
