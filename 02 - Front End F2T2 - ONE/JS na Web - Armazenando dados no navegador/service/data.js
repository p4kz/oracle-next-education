
export const removeDataRepetidas = (datas) => {
  const datasUnicas = []

  datas.forEach((data => {
    if (datasUnicas.indexOf(data.dataFormatada) === -1) {
      datasUnicas.push(data.dataFormatada)
    }
  }))

  return datasUnicas
}

export const ordenaDatas = (data) => {
  data.sort((a,b) => {
    const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD')
    const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD')
    
    return primeiraData - segundaData
  })
}