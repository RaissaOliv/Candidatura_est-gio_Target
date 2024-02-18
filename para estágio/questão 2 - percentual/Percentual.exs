defmodule Percentual do
  def avg() do
  (67836.43 + 36678.66 + 29229.88 + 27165.48 + 19849.53)
  end
  def percentageOfTheWhole(value, whole) do
    Float.round((value / whole) * 100, 2)
  end
  def printResults() do
    whole = avg()
    IO.puts("percentual SP: #{percentageOfTheWhole(67836.43, whole)}")
    IO.puts("percentual RJ: #{percentageOfTheWhole(36678.66, whole)}")
    IO.puts("percentual MG: #{percentageOfTheWhole(29229.88, whole)}")
    IO.puts("percentual ES: #{percentageOfTheWhole(27165.48, whole)}")
    IO.puts("percentual OUTROS: #{percentageOfTheWhole(19849.53, whole)}")
  end
end
