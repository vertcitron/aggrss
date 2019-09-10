export default class NewFeedInput {
  private wrapper: HTMLDivElement
  private input: HTMLInputElement
  private button: HTMLButtonElement

  constructor (parent: HTMLElement) {
    this.wrapper = document.createElement('div')
    this.wrapper.className = 'newfeed'

    this.input = document.createElement('input')
    this.input.type = 'text'
    this.input.placeholder = 'Enter a feed URL here to add it...'
    this.input.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.code.includes('Enter') && this.input.value) {
        this.submit(this.input.value)
      }
    })
    this.wrapper.appendChild(this.input)

    this.button = document.createElement('button')
    this.button.textContent = 'Add Feed'
    this.button.addEventListener('click', (e: MouseEvent) => {
      if (this.input.value) this.submit(this.input.value)
    })
    this.wrapper.appendChild(this.button)

    parent.appendChild(this.wrapper)
  }

  public submit (value: string) {
    console.error('The event handler to submit an URL is not defined.')
  }

  public onSubmit (callback: (value: string) => void) {
    this.submit = callback
  }
}
