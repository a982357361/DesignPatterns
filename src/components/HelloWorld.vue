<template>
  <div>
    <!-- <div>{{ hero.hp }} {{ hero.att }} {{ hero.def }} {{ hero.level }}</div>
    <button @click="meetOgre(ogre.basicLevel)">{{ ogre.basicLevel }}</button>
    <button @click="meetOgre(ogre.basicLevel + 1)">
      {{ ogre.basicLevel + 1 }}
    </button>
    <button @click="meetOgre(ogre.basicLevel + 2)">
      {{ ogre.basicLevel + 2 }}
    </button>
    <button @click="meetGoods"></button> -->
    <input type="text" pattern="[a-z]{3}" v-model="ddd" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {},
  data() {
    return {
      ddd: "",
      goods: ["x", "d"],
      hero: {
        hp: 100,
        att: 15,
        attPrice: 1,
        def: 2,
        speed: 1,
        expNeed: 5,
        exp: 0,
        level: 1,
        good: 0,
        x: 0,
      },

      ogre: {
        basicLevel: 1,
        levelPro: 10,
      },
    };
  },
  methods: {
    meetGoods() {
      let goods = this.goods[Math.floor(Math.random() * this.goods.length)];
      if (goods == "x") {
        //
        this.hero.x += 0.1;
      }
      if (goods == "d") {
        this.hero.attPrice++;
      }
    },
    meetOgre(level) {
      //遇见
      let ogre = {
        hp: 20 * level,
        att: 5 * level,
        def: level,
        exp: level,
        gold: level,
      };
      this.computHp(ogre); //计算
    },
    computHp(ogre) {
      let hunt1 = this.hero.att - ogre.def;
      let hunt2 = ogre.att - this.hero.def;
      ogre.hp -= hunt1;
      while (ogre.hp > 0) {
        ogre.hp -= hunt1;
        this.hero.hp -= hunt2 * this.hero.attPrice;
        let x = this.hero.att * this.hero.x;
        x = Math.ceil(x);
        this.hero.hp += x * this.hero.attPrice;
      }
      this.heroLevel(ogre.exp);
      this.ogreLevel();
      this.hero.good += ogre.gold;
    },
    ogreLevel() {
      //怪升
      if (Math.random() * 100 < this.ogre.levelPro) {
        this.ogre.basicLevel++;
        this.ogre.levelPro++;
      }
    },
    heroLevel(exp) {
      //英升
      this.hero.exp += exp;
      if (this.hero.exp >= this.hero.expNeed) {
        this.hero.expNeed *= 1.3;
        this.hero.expNeed = parseInt(this.hero.expNeed);
        this.hero.level++;
        this.hero.hp += this.hero.level * 10;
        this.hero.att += 2;
        this.hero.def += 1;
      }
    },
  },
};
</script>

<style scoped>
</style>
