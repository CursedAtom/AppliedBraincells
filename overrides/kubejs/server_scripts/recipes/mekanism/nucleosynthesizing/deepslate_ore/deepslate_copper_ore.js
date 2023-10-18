ServerEvents.recipes(event => {
    event.custom(
        {
            "type": "mekanism:nucleosynthesizing",
            "duration": 1000,
            "gasInput": {
              "amount": 8,
              "gas": "mekanism:antimatter"
            },
            "itemInput": {
              "ingredient": {
                "item": "minecraft:deepslate_copper_ore"
              }
            },
            "output": {
              "amount": 2,
              "item": "minecraft:deepslate_copper_ore"
            }
          }
       )
})