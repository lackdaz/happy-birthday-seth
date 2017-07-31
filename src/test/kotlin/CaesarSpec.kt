package com.jayjun.caesar

import kotlin.test.assertEquals
import org.jetbrains.spek.api.Spek
import org.jetbrains.spek.api.dsl.*

object CaesarSpec: Spek({
    given("a letter") {
        on("encrypt by shifting one position") {
            val caesar = Caesar(1)
            val cipherText = caesar.encrypt("a")
            it("should return the ciphertext") {
                assertEquals(cipherText, "b")
            }
        }

        on("decrypt by shifting one position") {
            val caesar = Caesar(1)
            val plainText = caesar.decrypt("b")
            it("should return the plaintext") {
                assertEquals(plainText, "a")
            }
        }

        on("encrypt by shifting three positions") {
            val caesar = Caesar(3)
            val cipherText = caesar.encrypt("a")
            it("should return the ciphertext") {
                assertEquals(cipherText, "d")
            }
        }

        on("decrypt by shifting three positions") {
            val caesar = Caesar(3)
            val plainText = caesar.decrypt("d")
            it("should return the plaintext") {
                assertEquals(plainText, "a")
            }
        }
    }

    given("a word") {
        val caesar = Caesar(1)

        on("encrypt") {
            val cipherText = caesar.encrypt("hello")
            it("should return the ciphertext") {
                assertEquals(cipherText, "ifmmp")
            }
        }

        on("decrypt") {
            val plainText = caesar.decrypt("ifmmp")
            it("should return the plaintext") {
                assertEquals(plainText, "hello")
            }
        }
    }

    given("a sentence") {
        on("encrypt") {
            val caesar = Caesar(2)
            val cipherText = caesar.encrypt("hello world")
            it("should return the ciphertext") {
                assertEquals(cipherText, "jgnnq yqtnf")
            }
        }

        on("decrypt") {
            val caesar = Caesar(2)
            val plainText = caesar.decrypt("jgnnq yqtnf")
            it("should return the plaintext") {
                assertEquals(plainText, "hello world")
            }
        }

        on("encrypt alphabets only") {
            val caesar = Caesar(5)
            val cipherText = caesar.encrypt("i'm gonna get smashed today!!!!! #yolo")
            it("should return the ciphertext") {
                assertEquals(cipherText, "n'r ltssf ljy xrfxmji ytifd!!!!! #dtqt")
            }
        }

        on("decrypt alphabets only") {
            val caesar = Caesar(5)
            val plainText = caesar.decrypt("n'r ltssf ljy xrfxmji ytifd!!!!! #dtqt")
            it("should return the plaintext") {
                assertEquals(plainText, "i'm gonna get smashed today!!!!! #yolo")
            }
        }
    }
})
