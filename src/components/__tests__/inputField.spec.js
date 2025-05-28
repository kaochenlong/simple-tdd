import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import InputCountField from '@/components/ui/InputCountField.vue'

describe('動態字數顯示', () => {
  test('沒有輸入的時候，顯示「你輸入了 0 個字」', () => {
    const wrapper = mount(InputCountField)
    expect(wrapper.text()).toContain('你輸入了 0 個字')
  })

  test('使用者可輸入文字', async () => {
    const wrapper = mount(InputCountField)
    const input = wrapper.find('input')

    await input.setValue('abcdefg')
    expect(wrapper.text()).toContain('你輸入了 7 個字')

    await input.setValue('abcd')
    expect(wrapper.text()).toContain('你輸入了 4 個字')
  })
})
