// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract AfriKanvas is ERC721, Ownable {

    uint256 private tokenId;
    string private ipfsBaseURI;

    constructor() ERC721("AfriKanvas", "AFK") Ownable(){
        _mint(msg.sender, tokenId++);
    }

    function safeMint() public returns(uint256) {
        _safeMint(msg.sender, tokenId++);
        return tokenId;
    }

    function setIpfsBaseURI(string memory _ipfsBaseURI) public onlyOwner {
        ipfsBaseURI = _ipfsBaseURI;
    }

    function transfer(address to, uint256 tokenId) public {
        _transfer(msg.sender, to, tokenId);
    }

    function _baseURI() internal view override returns (string memory) {
        return ipfsBaseURI;
    }

}