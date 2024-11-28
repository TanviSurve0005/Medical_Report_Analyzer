"use client"

import { useState } from "react"
import { FileHeart, Loader2 } from 'lucide-react'
import { useDropzone } from "react-dropzone"

interface FileUploadProps {
  onFileSelect: (file: File) => void
  isLoading?: boolean
}

export function FileUpload({ onFileSelect, isLoading }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false)

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileSelect(acceptedFiles[0])
      }
    },
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  })

  return (
    <div
      {...getRootProps()}
      className={`relative rounded-lg border-2 border-dashed p-8 text-center transition-colors cursor-pointer
        ${dragActive ? "border-primary bg-primary/10" : "border-muted-foreground/25"}
        ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-muted/50"}`}
    >
      <input {...getInputProps()} />
      {isLoading ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground font-medium">Analyzing your medical report...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2">
          <FileHeart className="h-12 w-12 text-primary" />
          <p className="text-sm text-muted-foreground font-medium">
            Drag & drop your medical report here, or click to select
          </p>
          <p className="text-xs text-muted-foreground">
            Supports PDF, PNG, JPG (up to 10MB)
          </p>
        </div>
      )}
    </div>
  )
}
