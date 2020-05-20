# feature-classifytor
easy tutorial:
var colors = [new cor('#E31A1C'),new cor('#FC4E2A'),new cor('#FD8D3C'),new cor('#FEB24C'),new cor('#FED976')]
var valors = [6,1,3,5,7,2,4,0,8,9]

graphed= grapDois(bairroColorCount,colors)

graphed output is a array like that :
  0: Object { cor: "#FED976", inicial: 0, final: 1 }

  1: Object { cor: "#FEB24C", inicial: 2, final: 3 }

  2: Object { cor: "#FD8D3C", inicial: 4, final: 5 }

  3: Object { cor: "#FC4E2A", inicial: 6, final: 7 }

  4: Object { cor: "#E31A1C", inicial: 8, final: 9 }
where:
  { cor: color, initial: initial_value, final: final_value }

if you have minus than the (length of the colors * 2), then the first items on the list will repeat.
Example:

  var valors = [ 4, 12, 24, 123, 123, 123, 432, 2123 ]

graphed= grapDois(bairroColorCount,colors)
graphed output:
  0: Object { cor: "#FED976", inicial: 4, final: 4 }

  1: Object { cor: "#FEB24C", inicial: 12, final: 12 }

  2: Object { cor: "#FD8D3C", inicial: 24, final: 24 }

  3: Object { cor: "#FC4E2A", inicial: 123, final: 123 }

  4: Object { cor: "#E31A1C", inicial: 432, final: 2123 }

!({{valors.length}} >= {{ colors.length}} need be True)!

