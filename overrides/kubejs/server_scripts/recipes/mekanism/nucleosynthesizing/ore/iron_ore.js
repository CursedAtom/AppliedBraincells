ServerEvents.recipes(event => {
  event.custom(
      {
          "type": "mekanism:nucleosynthesizing",
          "duration": 1000,
          "gasInput": {
            "amount": 4,
            "gas": "mekanism:antimatter"
          },
          "itemInput": {
            "ingredient": {
              "item": "minecraft:iron_ore"
            }
          },
          "output": {
            "amount": 2,
            "item": "minecraft:iron_ore"
          }
        }
     )
})