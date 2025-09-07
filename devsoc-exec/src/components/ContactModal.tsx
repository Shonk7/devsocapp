import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 3,
          minHeight: '500px',
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" component="div">
          Hello :3 I was too lazy to make this look good hehe
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Hit me up on:
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            📸 <strong>Instagram:</strong> @shonkisauras
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            💬 <strong>Discord:</strong> @shonk
          </Typography>
          
          <Typography variant="h6" sx={{ mb: 2 }}>
            But you have to watch this random thing my friend made:
          </Typography>
        </Box>
        
        <Box sx={{ 
          position: 'relative', 
          paddingBottom: '35%', 
          height: 0,
          maxWidth: '500px', 
          mx: 'auto',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: 2
        }}>
          <iframe
            src="https://drive.google.com/file/d/1lRtJWt4imerX6BsnFHTd79pOC4Jf3jW8/preview"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="Campaign Video"
            allow="autoplay"
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
