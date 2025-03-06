import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBetslipStore = defineStore('betslip', () => {

  const betslip = ref<{teamName: string, odds: number, id: number}[]>([])

  /**
   * Add to the betslip
   */
  function add(teamName: string, odds: number, id: number) {
    betslip.value.push({
      teamName,
      odds,
      id
    })
  }

  /**
   * Remove from the betslip
   */
  function remove(id: number){
    const index = betslip.value.findIndex(item => item.id === id)
    betslip.value.splice(index, 1)
  }

  return { add, remove, betslip }
})
