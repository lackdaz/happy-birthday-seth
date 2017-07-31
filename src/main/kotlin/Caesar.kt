package com.jayjun.caesar

class Caesar(val amount: Int) {
    fun encrypt(string: String): String = shift(string, amount)
    fun decrypt(string: String): String = shift(string, -amount)

    fun shift(string: String, amount: Int): String {
        var result: String = ""
        for (character in string) {
            when (character) {
                in 'A'..'Z' -> result += shift(character, amount, 'A')
                in 'a'..'z' -> result += shift(character, amount, 'a')
                else -> result += character
            }
        }
        return result
    }

    fun shift(character: Char, amount: Int, base: Char): Char {
        var shift = (character + amount - base) % 26
        if (shift < 0) {
            shift += 26
        }
        return base + shift
    }
}

fun main(args: Array<String>) {
    val cipher = Caesar(19)
    println(cipher.decrypt("Hgx Angwkxw Hkvatkw Khtw, Vhgvhkwx Ahmxe & Lahiibgz Ftee, #sxkhmph-yhkmrmakxx"))
}
