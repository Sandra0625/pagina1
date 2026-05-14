import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";

export default function generateInvoice(order, customer = {}) {
  return new Promise((resolve, reject) => {
    try {
      const invoicesDir = path.resolve("./backend/invoices");
      if (!fs.existsSync(invoicesDir)) fs.mkdirSync(invoicesDir, { recursive: true });

      const filename = `invoice-${order._id}.pdf`;
      const filepath = path.join(invoicesDir, filename);

      const doc = new PDFDocument({ size: "A4", margin: 50 });
      const stream = fs.createWriteStream(filepath);
      doc.pipe(stream);

      // Header
      doc.fontSize(20).text("Big Ban University", { align: "left" });
      doc.moveDown(0.5);
      doc.fontSize(12).text(`Factura: ${order._id}`, { align: "right" });
      doc.text(`Fecha: ${new Date(order.createdAt || Date.now()).toLocaleString()}`, { align: "right" });
      doc.moveDown(1);

      // Customer
      doc.fontSize(12).text("Cliente:");
      doc.fontSize(10).text(customer.name || "- ");
      doc.fontSize(10).text(customer.email || "- ");
      doc.moveDown(1);

      // Table header
      doc.fontSize(12).text("Items:");
      doc.moveDown(0.5);

      const tableTop = doc.y;
      const itemX = 50;
      const descX = 150;
      const priceX = 450;

      doc.fontSize(10).text("Cant.", itemX, tableTop);
      doc.text("Descripción", descX, tableTop);
      doc.text("Precio", priceX, tableTop);

      doc.moveDown(0.5);

      (order.items || []).forEach((it, i) => {
        const y = tableTop + 25 + i * 20;
        doc.text("1", itemX, y);
        doc.text(it.title || it.name || `Item ${i + 1}`, descX, y);
        doc.text(`$ ${Number((it.price || 0)).toFixed(2)}`, priceX, y);
      });

      doc.moveDown(2);
      doc.fontSize(12).text(`Total: $ ${Number(order.total || 0).toFixed(2)}`, { align: "right" });

      doc.moveDown(2);
      doc.fontSize(9).text("Gracias por tu compra.");

      doc.end();

      stream.on("finish", () => resolve(filepath));
      stream.on("error", (err) => reject(err));
    } catch (err) {
      reject(err);
    }
  });
}
