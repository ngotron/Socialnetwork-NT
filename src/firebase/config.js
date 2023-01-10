const ky = {
  id: 1,
  data: () => ({
    name: "NDK"
  })
}

const kyFlatted = {...ky.data(), id: ky.id}
console.log(ky);
console.log(kyFlatted);