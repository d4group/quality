<template>
	<div class="news">
		<h1>News:</h1>
		<h3><v-icon>mdi-calendar</v-icon> 01.05.2024</h3>

		<span>Dołączamy do świata AI</span>
			<v-img
			height="250"
			src="./images/AI.png"
			cover
		></v-img>
	</div>
</template>
<style scoped>

	.news {
		border-block-color: red;
		border-block-width: 2px;
		border-block-style: solid;
		text-align: center;
		width: 100%;
		height: 100%;
		padding: auto;
		margin: 10px;
		align-items: center;
	}
	.news h1 {
		font-size: 100px;
		font-weight: 600;
	}
	.news span {
		font-size: 18px;
		font-weight: 400;
	}
</style>