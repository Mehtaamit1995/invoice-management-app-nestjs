// import {} 


// @Resolver(of => InvoiceModel)
// export class InvoiceResolver {
//   constructor(


// @Query()
// async generatePdf(
//     @Args('id') id: string,
//     @Res() res: Response,
//   ): Promise<void> {
//     const buffer : Buffer = await this.service.generatedPdf(id);
//     const stream = new Readable();  
//     stream.push(buffer);
//     stream.push(null);
//     res.req.res.set({
//       'Content-Type': 'application/pdf',
//       'Content-Length': buffer.length,
//     });
//     stream.pipe(res.req.res);
//   }

// const sendMailPdf = (res, invoice) =>{

    //     pdfGenerate(res , invoice)
    
    //     pathToAttachment = './pdf/'+invoice.invoiceId+'.pdf'
    //     attachment = fs.readFileSync(pathToAttachment).toString("base64")
    
    //     const msg = {
    //         to: invoice.email,
    //         from: process.env.SUPER_ADMIN_EMAIL,
    //         subject: 'Invoice',
    //         text: 'Your invoice is as follows',
    //         attachments: [
    //           {
    //             content: attachment,
    //             filename: "invoice.pdf",
    //             type: "application/pdf",
    //             disposition: "attachment"
    //           }
    //         ]
    //       }
    
    //       sgMail.send(msg)
    //       .then(()=>{
    //           res.send({message:'The email has sent succesfully.'})
    //     }).catch(err => {
    //        flags(err, undefined , req , res)
    //       })
    
    // }