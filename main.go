package main

import "github.com/webview/webview"

func main() {
	debug := true
	w := webview.New(debug)
	defer w.Destroy()
	w.SetTitle("kbk")
	w.SetSize(600, 800, webview.HintNone)
	w.Navigate("http://localhost:8100/")
	w.Run()
}
