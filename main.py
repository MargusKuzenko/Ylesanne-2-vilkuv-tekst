def on_forever():
    basic.show_string("\"Häid jõule!\"")
    for index in range(3):
        basic.show_icon(IconNames.HEART)
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
basic.forever(on_forever)
