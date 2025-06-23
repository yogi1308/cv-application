export default function addComponents(container, reactComponent) {
    document.querySelector(`.${container}`).appendChild(`${reactComponent}`)
}