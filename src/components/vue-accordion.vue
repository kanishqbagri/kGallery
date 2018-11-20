<template>
<div :class="container-outer">
	<div :class="accordionClass" >
        
		<ul>
			<partial-accordion 
				v-for="(item,index) in images" 
				:item="item" 
				:key="index"
				:styles="styles"
			></partial-accordion>
		</ul>
	</div>
</div>
</template>
<script>
	import partialAccordion from './vue-accordion-partial.vue'
	export default {
        name: 'vue-accordion',
        data() {
            return{
                images:[{
		title: 'First',
		text: 'kids1',
		url: '#',
		image: 'static/img/kids/kids1.jpg'
	}, {
		title: 'Second',
		text: 'kids2',
		url: '#',
		image: 'static/img/kids/kids2.jpg'
	}, {
		title: 'Third',
		text: 'kids3',
		url: '#',
		image: 'static/img/kids/kids3.jpg'
	}, {
		title: 'Fourth',
		text: 'kids4',
		url: '#',
		image: 'static/img/kids/kids4.jpg'
    },
    {
		title: 'Fifth',
		text: 'kids5',
		url: '#',
		image: 'static/img/kids/kids5.jpg'
	}, ]
}
        },

		props: {
			items: {
				type: Array
			},
			styles: {
				type: Object,
				default: function() {
					return {}
				}
			},
			accordionClass: {
				type: String,
				default: 'vue-accordion'
			}
		},
		computed: {
			divStyles() {
				return this.styles && this.styles.div ? this.styles.div : {};
			}
		},
		components: {
			partialAccordion
		}
	}
</script>
<style>
	.vue-accordion {
		width: 100%;
		overflow: hidden;
		height: 335px;
		max-width: 1200px;
        padding-bottom: 20px;
    }
    .vue-accordion ul {
		width: 100%;
		height: 100%;
		display: inline-flex;
		table-layout: fixed;
		margin: 0;
		padding: 10;
    }
    .container-outer{
    width:100%;
    height:100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    }
</style>
