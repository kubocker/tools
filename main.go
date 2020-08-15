package main

import "github.com/webview/webview"

func main() {
	debug := true
	w := webview.New(debug)
	defer w.Destroy()
	w.SetTitle("Minimal webview example")
	w.SetSize(600, 800, webview.HintNone)
	w.Navigate("https://www.yahoo.co.jp")
	w.Run()
}
