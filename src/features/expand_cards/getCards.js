const getCards = (num) => {
  const output = []

  const spread = 30
  const midpoint = (num - 1) / 2

  for (let i = 0; i < num; i++) {

    const baseRotation = ((i - midpoint) / midpoint) * (spread / 2)
    const randomOffset = (Math.random() * 6) - 3

    output.push({
      initialIndex: i,
      hoverRotation: `${randomOffset.toFixed(2)}deg`,
      initialRotation: `${baseRotation.toFixed(2)}deg`
    })
  }

  return output
}

export default getCards