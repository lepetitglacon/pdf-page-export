import { MarkdownView, Plugin } from "obsidian";

import PDFDocument from "pdfkit";
import * as fs from "fs";
import * as path from "path";

export default class PDFExportPlugin extends Plugin {
	async onload() {

		console.log('hello')

		this.addCommand({
			id: "export-to-pdf",
			name: "Export to PDF",
			callback: async () => await this.exportToPDF(),
		});

	}

	async exportToPDF() {
		console.log("yahou")


		// le probleme est que __dirname emene vers le mauvais dossier
		console.log(__dirname)

		const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
		console.log(activeView)
		if (activeView) {
			const content = activeView.getDisplayText();
			console.log(content)

			// Generate the PDF
			const doc = new PDFDocument();

			const filePath = path.join(activeView.file.vault.adapter.basePath, "pdf-exports/note.pdf");
			console.log(filePath)
		}
	}
}
