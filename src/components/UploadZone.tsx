import { useState, useRef } from "react";
import { Card, Button, CardBody } from "@nextui-org/react";
import { Upload, FileText, X, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UploadZone = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    // Simple toast replacement - you could integrate with a toast library
    console.log(`${type}: ${message}`);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFileUpload(files[0]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    if (!file) return;

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(file.type)) {
      showToast("Please upload a PDF or Word document.", 'error');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast("Please upload a file smaller than 5MB.", 'error');
      return;
    }

    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      setUploadedFile(file);
      setIsUploading(false);
      showToast("File uploaded successfully!");
    }, 1500);
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  if (uploadedFile) {
    return (
      <Card className="border-success-200 bg-success-50">
        <CardBody className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-success rounded-lg">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-foreground">{uploadedFile.name}</p>
                <p className="text-sm text-foreground-500">
                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <CheckCircle className="h-5 w-5 text-success" />
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                color="primary" 
                size="sm"
                className="bg-gradient-to-r from-primary-500 to-secondary-500"
                onClick={() => navigate('/analysis')}
              >
                Analyze Resume
              </Button>
              <Button 
                variant="light" 
                size="sm" 
                isIconOnly
                onClick={removeFile}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card
      className={`cursor-pointer transition-all duration-300 ${
        isDragOver
          ? 'border-primary-300 bg-primary-50 scale-105 border-2'
          : 'border-default-200 hover:border-primary-300 hover:bg-default-50 border-2'
      } ${isUploading ? 'pointer-events-none' : ''} border-dashed`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={triggerFileSelect}
    >
      <CardBody className="p-8">
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            {isUploading ? (
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            ) : (
              <Upload className="h-8 w-8 text-primary" />
            )}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {isUploading ? 'Uploading your resume...' : 'Drop your resume here'}
            </h3>
            <p className="text-foreground-500 mb-4">
              {isUploading 
                ? 'Please wait while we process your file'
                : 'or click to browse files'
              }
            </p>
            
            {!isUploading && (
              <div className="text-sm text-foreground-400">
                <p>Supports PDF, DOC, DOCX • Max 5MB</p>
              </div>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UploadZone;