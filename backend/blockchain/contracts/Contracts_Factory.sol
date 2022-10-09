// SPDX-License-Identifier: MIT
pragma solidity 0.5.0;
pragma experimental ABIEncoderV2;

import "./Manufacturer.sol";
import "./Distributor.sol";
import "./Retailer.sol";
import "./Customer.sol";
import "./Product.sol";
import "./Transport.sol";

contract Contracts_Factory {

    // Common Section
    uint256 SIZE = 10;
    uint index = 0;
    string[] accounts = [
        "0xE994DEdf85Bd205c8d1eDFbd9BC71c0d79fFaDcA",
        "0x8Ab03cd043796d81C54F50C5db73c5e4A7680CA7",
        "0x181160615F6c9d53c151ea33970d0Bd6ff006D38",
        "0xF771Fe82C7D46c811B286F7927328086D6bf3355",
        "0xCf88EAA8cB91E8Cf8cf17b8A2732560A5A537cD9",
        "0x6196c138Dc183a0f3F9e65E323f4Ee7265199ecd",
        "0x1c2CDBC007F70545Bb201A170bb2e8f7Ac361be0",
        "0x13BF1422044108Fd074A1726a086957948f31BB6",
        "0x899dC8edCb169efcdaFd4904A98Fde51203d8a47",
        "0x4c348353dAfB690D561DF4bFd6e718123E2095a6"
    ];

    function getEthAccount() public view returns (string[] memory) {
        return accounts;
    }
    function getIndex() public view returns(uint){
        return index;
    }
    function incrementIndex() public {
       index++;
    }

    // Manufacturer Section
    int256 _manufacturer_SIZE = 0;
    Manufacturer[] _manufacturers;

    function createManufacturer() public {
        Manufacturer newManufacturer = new Manufacturer();
        _manufacturers.push(newManufacturer);
        _manufacturer_SIZE++;
    }

    function allManufacturers() public view returns (Manufacturer[] memory) {
        return _manufacturers;
    }

    function get_manufacturer_SIZE() public view returns (int256) {
        return _manufacturer_SIZE;
    }


    // Distributor Section
    int256 _distributor_SIZE = 0;
    Distributor[] _distributors;

    function createDistributor() public {
        Distributor newdistributor = new Distributor();
        _distributors.push(newdistributor);
        _distributor_SIZE++;
    }

    function allDistributors() public view returns (Distributor[] memory) {
        return _distributors;
    }

    function get_distributor_SIZE() public view returns (int256) {
        return _distributor_SIZE;
    }


    // Retailer Section
    int256 _retailer_SIZE = 0;
    Retailer[] _retailers;

    function createRetailer() public {
        Retailer newRetailer = new Retailer();
        _retailers.push(newRetailer);
        _retailer_SIZE++;
    }

    function allRetailers() public view returns (Retailer[] memory) {
        return _retailers;
    }

    function get_retailer_SIZE() public view returns (int256) {
        return _retailer_SIZE;
    }

    // Customer Section
    int256 _customer_SIZE = 0;
    Customer[] _customers;

    function createCustomer() public {
        Customer newManufacturer = new Customer();
        _customers.push(newManufacturer);
        _customer_SIZE++;
    }

    function allCustomers() public view returns (Customer[] memory) {
        return _customers;
    }

    function get_customer_SIZE() public view returns (int256) {
        return _customer_SIZE;
    }


    // Product Section
    int256 _product_SIZE = 0;
    Product[] _products;

    function createProduct(string memory _owner) public {
        Product newProduct = new Product(_owner);
        _products.push(newProduct);
        _product_SIZE++;
    }

    function allProducts() public view returns(Product[] memory){
        return _products;
    }

    function get_product_SIZE() public view returns (int256){
        return _product_SIZE;
    }

    // Transport Section
    int256 _transport_SIZE = 0;
    Transport[] _transports;

    function createTransport(string memory _owner) public {
        Transport newTransport = new Transport(_owner);
        _transports.push( newTransport);
        _transport_SIZE++;
    }

    function allTransports() public view returns(Transport[] memory){
        return _transports;
    }

    function get_transport_SIZE() public view returns (int256){
        return _transport_SIZE;
    }

}
