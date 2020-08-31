<template>
  <div class="relative my-3 border py-5 px-2 rounded-lg shadow">
    <span class="font-light">
      Remaining cards:
      {{ items.length }}
    </span>
    <!-- RESULTS -->
    <div v-if="lastItem">
      <p class="text-xl text-green-500 font-light text-center">Your answers:</p>
      <div class="flex flex-col md:flex-row justify-around p-5">
        <ul v-for="category in categories">
          <span class="text-xl text-red-500 font-light">{{
            category.label
          }}</span>
          <li
            v-for="(listItem, index) in category.list"
            :key="`li-${index}`"
            class="text-gray-600"
          >
            {{ listItem.name }}
          </li>
        </ul>
      </div>
    </div>

    <!-- ACTIVITY -->
    <div v-else class="flex justify-center mb-48">
      <div
        v-for="(item, index) in items"
        :key="`item-${index}`"
        :data-category="item.category"
        :data-name="item.name"
        :data-index="index"
        :id="`card-${index}`"
        class="my-handle center-flex card draggable"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      :class="`grid gap-1 grid-flow-row grid-cols-2 ${
        droppableGridSize[categories.length]
      }`"
    >
      <div
        :id="category.name"
        :data-category="category.name"
        v-for="(category, index) in categories"
        :key="`category-${index}`"
        class="card droppable"
      >
        {{ category.label }}
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import Draggable from "gsap/Draggable.js";
import {
  setCenter,
  reset,
  playIncorrectSeq,
  playCorrectSeq,
} from "@/utils/gsap-draggable.js";

export default {
  props: ["categories", "items"],
  data() {
    return {
      lastItem: false,
      droppableGridSize: {
        3: "md:grid-cols-3",
        4: "md:grid-cols-4",
      },
    };
  },
  mounted() {
    gsap.registerPlugin(Draggable);

    // to fix Safari glitch with transform3D
    gsap.to(".draggable", { x: 0, y: 0, z: 0, force3D: true });

    const vm = this;
    Draggable.create(".draggable", {
      edgeResistance: 0,
      bounds: window,
      onDrag: function () {
        gsap.to(this.target, {
          duration: 1,
          rotate: "random(10, -10)",
          yoyo: true,
          ease: "sine",
        });
      },
      onDragEnd: function () {
        gsap.to(this.target, {
          duration: 1,
          rotate: 0,
          ease: "sine",
        });

        const actionTargets = vm.categories.map((category) =>
          document.getElementById(category.name)
        );

        const item = actionTargets.filter((target) =>
          this.hitTest(target, "25%")
        );

        if (item.length == 1) {
          vm.checkAnswer(this, item[0]);
        } else {
          reset(this.target);
        }
      },
    });
  },
  methods: {
    checkAnswer(instance, actionTarget) {
      // set in center
      setCenter(instance.target, actionTarget);
      // check category
      if (instance.target.dataset.category == actionTarget.dataset.category) {
        playCorrectSeq(
          instance.target,
          this.correctCallback,
          instance.target.dataset.index
        );
      } else {
        playIncorrectSeq(
          instance.target,
          this.incorrectCallback,
          instance.target.dataset.index
        );
      }
    },
    correctCallback(index) {
      this.addItem(index);
      this.items.splice(index, 1);
      this.isLastItem();
    },
    incorrectCallback(index) {
      this.items.splice(index, 1);
      this.isLastItem();
    },
    addItem(index) {
      let category = this.categories.find((category) => {
        return category.name == this.items[index].category;
      });
      category.list.push(this.items[index]);
    },
    isLastItem() {
      this.items.length == 0 ? (this.lastItem = true) : (this.lastItem = false);
    },
  },
};
</script>
