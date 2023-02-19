import { ref, reactive } from 'vue'

const state = reactive({
	content: null
})

export function useContentFetch() {
	const actions = {
		getData: async () => {
			const response = await fetch("./assets/data.json")
			state.content = await response.json();
			state.content.map(obj => obj.active = false)
			state.content[0].active = true;
		},
		resetContent: async (content) => {
			state.content.map((obj) => {
				if (obj !== content) {
					obj.active = false;
				}
			})
		},
		resetContentDesktop: async () => {
			let num = state.content.filter(obj => obj.active);
	
			if (num && num.length === 0) {
				state.content.map(obj => obj.active = false)
				state.content[0].active = true;
			}
		}
	}
	return { state, actions }
}