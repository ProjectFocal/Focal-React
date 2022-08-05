import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { Divider } from '@mui/material';


export default function ControlledTreeView() {
    const [expanded, setExpanded] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
  
    const handleToggle = (event, nodeIds) => {
      setExpanded(nodeIds);
    };
  
    const handleSelect = (event, nodeIds) => {
      setSelected(nodeIds);
    };
  
    const handleExpandClick = () => {
      setExpanded((oldExpanded) =>
        oldExpanded.length === 0 ? ['1', '5', '6', '7'] : [],
      );
    };
  
    const handleSelectClick = () => {
      setSelected((oldSelected) =>
        oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : [],
      );
    };




  return (
    <div class="padding">
    <Box sx={{ height: 700, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
        <Button onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        <TreeItem nodeId="1" label="Secondary 1">
        <Divider variant="middle" />
          <TreeItem nodeId="2" label="WorkBooks" />
          <TreeItem nodeId="3" label="Handouts" />
          <TreeItem nodeId="4" label="Notes" />
        </TreeItem>

        <TreeItem nodeId="1" label="Secondary 2">
        <Divider variant="middle" />
          <TreeItem nodeId="2" label="WorkBooks" />
          <TreeItem nodeId="3" label="Handouts" />
          <TreeItem nodeId="4" label="Notes" />
        </TreeItem>

        <TreeItem nodeId="1" label="Secondary 3">
        <Divider variant="middle" />
          <TreeItem nodeId="2" label="WorkBooks" />
          <TreeItem nodeId="3" label="Handouts" />
          <TreeItem nodeId="4" label="Notes" />
        </TreeItem>

        <TreeItem nodeId="1" label="Secondary 4">
        <Divider variant="middle" />
          <TreeItem nodeId="2" label="WorkBooks" />
          <TreeItem nodeId="3" label="Handouts" />
          <TreeItem nodeId="4" label="Notes" />
        </TreeItem>

        <TreeItem nodeId="5" label="Secondary 5">
        <Divider variant="middle" />
          <TreeItem nodeId="6" label="MUI">
            <TreeItem nodeId="7" label="src">
              <TreeItem nodeId="8" label="index.js" />
              <TreeItem nodeId="9" label="tree-view.js" />
            </TreeItem>

        
          </TreeItem>
        </TreeItem>
      </TreeView>
    </Box>
    </div>
      
    
  );
}
