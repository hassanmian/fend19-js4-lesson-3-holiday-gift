import React from 'react'
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import ResultComponent from "../ResultComponent"


let container = null;

beforeEach(() => {
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

describe("Tests Result Component", () => {

  it("renders code aaa correctly", () => {
    act( () => {
      render(<ResultComponent code="aaa" />, container)
    })
    expect(container.textContent).toContain("Cool T-Shirt")
  })

  it("renders code baa correctly", () => {
    act( () => {
      render(<ResultComponent code="baa" />, container)
    })
    expect(container.textContent).toContain("Cool Hoody")
  })

  it("renders code caa correctly", () => {
    act( () => {
      render(<ResultComponent code="caa" />, container)
    })
    expect(container.textContent).toContain("Warm Socks")
  })

  it("renders code aba correctly", () => {
    act( () => {
      render(<ResultComponent code="aba" />, container)
    })
    expect(container.textContent).toContain("Star Wars figure")
  })

  it("renders code bba correctly", () => {
    act( () => {
      render(<ResultComponent code="bba" />, container)
    })
    expect(container.textContent).toContain("Marvel T-Shirt")
  })

  it("renders code cba correctly", () => {
    act( () => {
      render(<ResultComponent code="cba" />, container)
    })
    expect(container.textContent).toContain("Smart Home Component")
  })

  it("renders code aca correctly", () => {
    act( () => {
      render(<ResultComponent code="aca" />, container)
    })
    expect(container.textContent).toContain("Coloring Book")
  })

  it("renders code bca correctly", () => {
    act( () => {
      render(<ResultComponent code="bca" />, container)
    })
    expect(container.textContent).toContain("Screwdriver")
  })

  it("renders code cca correctly", () => {
    act( () => {
      render(<ResultComponent code="cca" />, container)
    })
    expect(container.textContent).toContain("Knitting Kit")
  })

  it("renders code aab correctly", () => {
    act( () => {
      render(<ResultComponent code="aab" />, container)
    })
    expect(container.textContent).toContain("Fashionable Clothing")
  })

  it("renders code bab correctly", () => {
    act( () => {
      render(<ResultComponent code="bab" />, container)
    })
    expect(container.textContent).toContain("Branded Jewellry")
  })

  it("renders code cab correctly", () => {
    act( () => {
      render(<ResultComponent code="cab" />, container)
    })
    expect(container.textContent).toContain("Nice Hat")
  })

  it("renders code abb correctly", () => {
    act( () => {
      render(<ResultComponent code="abb" />, container)
    })
    expect(container.textContent).toContain("Something from Teknikmagasinet")
  })

  it("renders code bbb correctly", () => {
    act( () => {
      render(<ResultComponent code="bbb" />, container)
    })
    expect(container.textContent).toContain("Something from Webhallen")
  })

  it("renders code cbb correctly", () => {
    act( () => {
      render(<ResultComponent code="cbb" />, container)
    })
    expect(container.textContent).toContain("Something from Mediamarkt")
  })

  it("renders code acb correctly", () => {
    act( () => {
      render(<ResultComponent code="acb" />, container)
    })
    expect(container.textContent).toContain("Something from Panduro")
  })

  it("renders code bcb correctly", () => {
    act( () => {
      render(<ResultComponent code="bcb" />, container)
    })
    expect(container.textContent).toContain("Something from a store located in Södermalm")
  })

  it("renders code ccb correctly", () => {
    act( () => {
      render(<ResultComponent code="ccb" />, container)
    })
    expect(container.textContent).toContain("Crafts Table")
  })

  it("renders code aac correctly", () => {
    act( () => {
      render(<ResultComponent code="aac" />, container)
    })
    expect(container.textContent).toContain("Something from Glitter")
  })

  it("renders code bac correctly", () => {
    act( () => {
      render(<ResultComponent code="bac" />, container)
    })
    expect(container.textContent).toContain("Something from Rituals")
  })

  it("renders code cac correctly", () => {
    act( () => {
      render(<ResultComponent code="cac" />, container)
    })
    expect(container.textContent).toContain("Something from Guldfynd")
  })

  it("renders code abc correctly", () => {
    act( () => {
      render(<ResultComponent code="abc" />, container)
    })
    expect(container.textContent).toContain("RC Car")
  })

  it("renders code bbc correctly", () => {
    act( () => {
      render(<ResultComponent code="bbc" />, container)
    })
    expect(container.textContent).toContain("Smart Home Sockets")
  })

  it("renders code cbc correctly", () => {
    act( () => {
      render(<ResultComponent code="cbc" />, container)
    })
    expect(container.textContent).toContain("Wifi Lamps")
  })

  it("renders code acc correctly", () => {
    act( () => {
      render(<ResultComponent code="acc" />, container)
    })
    expect(container.textContent).toContain("Get started with Molding Kit")
  })

  it("renders code bcc correctly", () => {
    act( () => {
      render(<ResultComponent code="bcc" />, container)
    })
    expect(container.textContent).toContain("Sewing Kit")
  })

  it("renders code ccc correctly", () => {
    act( () => {
      render(<ResultComponent code="ccc" />, container)
    })
    expect(container.textContent).toContain("A bag of cement")
  })

})