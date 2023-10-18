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
                "item": "mekanism:deepslate_uranium_ore"
              }
            },
            "output": {
              "amount": 2,
              "item": "mekanism:deepslate_uranium_ore"
            }
          }
       )
})