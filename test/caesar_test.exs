defmodule CaesarTest do
  use ExUnit.Case
  import Caesar

  test "encrypt/2 a letter" do
    assert encrypt("a", 1) == "b"
    assert encrypt("a", 3) == "d"
  end

  test "encrypt/2 a word" do
    assert encrypt("hello", 1) == "ifmmp"
  end

  test "encrypt/2 a sentence" do
    assert encrypt("hello world", 1) == "ifmmp xpsme"
    assert encrypt("hello world", 2) == "jgnnq yqtnf"
  end

  test "encrypt/2 only shifts alphabet" do
    plaintext = "i'm gonna get smashed today!!!!! #yolo"
    assert encrypt(plaintext, 5) == "n'r ltssf ljy xrfxmji ytifd!!!!! #dtqt"
  end

  test "decrypt/2 a letter" do
    assert decrypt("b", 1) == "a"
    assert decrypt("d", 3) == "a"
  end

  test "decrypt/2 a word" do
    assert decrypt("ifmmp", 1) == "hello"
  end

  test "decrypt/2 a sentence" do
    assert decrypt("ifmmp xpsme", 1) == "hello world"
    assert decrypt("jgnnq yqtnf", 2) == "hello world"
  end

  test "decrypt/2 only shifts alphabet" do
    ciphertext = "n'r ltssf ljy xrfxmji ytifd!!!!! #dtqt"
    assert decrypt(ciphertext, 5) == "i'm gonna get smashed today!!!!! #yolo"
  end
end
