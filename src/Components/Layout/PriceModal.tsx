import { Dialog, DialogContent, DialogClose } from "../ui/dialog";
import { X, Download } from "lucide-react";



// Modal props
interface ModalProps {
    isOpen: any;
    setIsOpen: (isOpen: Boolean) => void;
    pdfUrl?: string;
}



export default function PdfModal({ isOpen, setIsOpen, pdfUrl = "/_static_docs_docschatbot.pdf" }: ModalProps) {


    
    // Handle download PDF
    const handleDownload = () => {
        // Create an anchor element and set attributes
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop() || 'document.pdf';

        // Append to body, click and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    return (


        <Dialog open={isOpen} onOpenChange={setIsOpen}>


            <DialogContent className="p-0 overflow-hidden rounded-lg bg-black border-0 w-full">


                <div className="flex flex-col h-full w-full">


                    {/* Header with controls */}
                    <div className="bg-black p-4 flex items-center justify-between border-b w-full">

                        <div className="text-lg font-medium">Pricing List</div>

                        <div className="flex items-center me-10">
                            
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-2 px-3 hover:cursor-pointer py-2 rounded bg-black text-white hover:bg-black"
                            >
                                <Download className="h-4 w-4" />
                                <span>Download PDF</span>
                            </button>

                        </div>

                    </div>


                    {/* PDF Viewer using iframe */}
                    <div
                        className="flex-1 overflow-auto bg-gray-50 flex items-center justify-center w-full"
                        style={{
                            transformOrigin: 'center center',
                            transition: 'transform 0.2s'
                        }}
                    >
                        <iframe
                            src={pdfUrl}
                            title="PDF Viewer"
                            className="w-full h-full border-0"
                            style={{
                                minHeight: "500px",
                                backgroundColor: "white"
                            }}
                        />
                    </div>


                </div>


                <DialogClose className="absolute hover:cursor-pointer right-4 top-4 rounded-full w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm z-50 text-gray-500 hover:text-gray-900 hover:bg-gray-100 shadow-md">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </DialogClose>
                
            </DialogContent>


        </Dialog>
    );
}