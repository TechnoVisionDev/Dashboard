<section class="waves">
	<div class="wave"></div>
	<div class="wave"></div>
	<div class="wave"></div>
	<div class="wave"></div>
</section>

<style lang="scss">
	.waves {
		position: relative;
		margin-top: 15rem;

		.wave {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100px;
			background: url(/home/wave.png);
			background-size: 1000px 100px;
			animation-timing-function: linear;
			animation-iteration-count: infinite;

			&:nth-of-type(2), &:nth-of-type(3) {
				background: url(/home/gradient_wave.png);
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100px;
				background-size: 1000px 100px;
			}

			&:nth-of-type(1n) {
				animation-name: wave-left
			}

			&:nth-of-type(2n) {
				animation-name: wave-right;
			}

			&:nth-of-type(1) {
				animation-duration: 30s;
				z-index: 503;
				opacity: 1;
				animation-delay: 0s;
				bottom: 0;
			}

			&:nth-of-type(2) {
				animation-duration: 15s;
				z-index: 502;
				opacity: 0.5;
				animation-delay: -5s;
				bottom: 10px;
			}

			&:nth-of-type(3) {
				animation-duration: 30s;
				z-index: 501;
				opacity: 0.2;
				animation-delay: -2s;
				bottom: 15px;
			}

			&:nth-of-type(4) {
				animation-duration: 8s;
				z-index: 500;
				opacity: 0.7;
				animation-delay: -5s;
				bottom: 20px;
			}

			@media (prefers-reduced-motion: reduce) {
				animation: none;

				&:nth-of-type(1) {
					background-position-x: 700px;
				}

				&:nth-of-type(2) {
					background-position-x: -500px;
				}

				&:nth-of-type(3) {
					background-position-x: 0;
				}

				&:nth-of-type(4) {
					background-position-x: 200px;
				}
			}
		}
	}

	@keyframes wave-left {
		0% {
			background-position-x: 0;
		}
		100% {
			background-position-x: 1000px;
		}
	}

	@keyframes wave-right {
		0% {
			background-position-x: 0;
		}
		100% {
			background-position-x: -1000px;
		}
	}
</style>
