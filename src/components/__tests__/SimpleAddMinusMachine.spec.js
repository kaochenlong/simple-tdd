import { describe, test, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import SimpleAddMinusMachine from '@/components/form/SimpleAddMinusMachine.vue'

describe('簡單加減器', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SimpleAddMinusMachine)
  })

  test('中間的預設數字 0', () => {
    const input = wrapper.find('span')
    expect(input.text()).toEqual('0')
  })

  test('按 + 按鈕數字加 1，- 按鈕數字減 1', async () => {
    const input = wrapper.find('span')
    const plusBtn = wrapper.find('[data-testid="plusBtn"]')
    const minusBtn = wrapper.find('[data-testid="minusBtn"]')

    expect(input.text()).toEqual('0')

    await plusBtn.trigger('click')
    await plusBtn.trigger('click')

    expect(input.text()).toEqual('2')

    await minusBtn.trigger('click')
    expect(input.text()).toEqual('1')
  })

  test('數字不能是負的值', async () => {
    const input = wrapper.find('span')
    const minusBtn = wrapper.find('[data-testid="minusBtn"]')

    expect(input.text()).toEqual('0')
    await minusBtn.trigger('click')
    await minusBtn.trigger('click')
    await minusBtn.trigger('click')
    expect(input.text()).toEqual('0')
  })
})
