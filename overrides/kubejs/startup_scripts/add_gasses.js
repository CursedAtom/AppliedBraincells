StartupEvents.registry('fluid', event => {

    event.create('neutralized_waste')
    .thinTexture(0x754C15)
    .bucketColor(0x754C15)
    .displayName('Neutralized Waste')
  	.noBucket()
  	.noBlock()
    .gaseous()

})