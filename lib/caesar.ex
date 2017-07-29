defmodule Caesar do
  def start(_type, _args) do
    IO.puts decrypt("Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx", 19)
    {:ok, self()}
  end

  def encrypt(string, amount), do: shift(string, amount)
  def decrypt(string, amount), do: shift(string, -amount)

  defp shift(string, amount) when is_binary(string),
    do: for <<char <- string>>, into: <<>>, do: <<shift(char, amount)>>

  defp shift(char, amount) when char in ?A..?Z,
    do: shift(char, amount, ?A)
  defp shift(char, amount) when char in ?a..?z,
    do: shift(char, amount, ?a)
  defp shift(char, _amount),
    do: char

  defp shift(char, amount, base),
    do: Integer.mod(char + amount - base, 26) + base
end
