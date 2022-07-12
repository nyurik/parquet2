var sourcesIndex = {};
sourcesIndex["parquet2"] = {"name":"","dirs":[{"name":"bloom_filter","files":["hash.rs","mod.rs","read.rs","split_block.rs"]},{"name":"deserialize","files":["binary.rs","boolean.rs","filtered_rle.rs","fixed_len.rs","hybrid_rle.rs","mod.rs","native.rs","utils.rs"]},{"name":"encoding","dirs":[{"name":"delta_bitpacked","files":["decoder.rs","encoder.rs","mod.rs"]},{"name":"delta_byte_array","files":["decoder.rs","mod.rs"]},{"name":"delta_length_byte_array","files":["decoder.rs","encoder.rs","mod.rs"]},{"name":"hybrid_rle","files":["bitmap.rs","decoder.rs","encoder.rs","mod.rs"]}],"files":["bitpacking.rs","mod.rs","plain_byte_array.rs","uleb128.rs","zigzag_leb128.rs"]},{"name":"indexes","files":["index.rs","intervals.rs","mod.rs"]},{"name":"metadata","files":["column_chunk_metadata.rs","column_descriptor.rs","column_order.rs","file_metadata.rs","mod.rs","row_metadata.rs","schema_descriptor.rs","sort.rs"]},{"name":"page","dirs":[{"name":"page_dict","files":["binary.rs","fixed_len_binary.rs","mod.rs","primitive.rs"]}],"files":["mod.rs"]},{"name":"read","dirs":[{"name":"indexes","files":["deserialize.rs","mod.rs","read.rs"]},{"name":"page","files":["indexed_reader.rs","mod.rs","reader.rs","stream.rs"]}],"files":["compression.rs","levels.rs","metadata.rs","mod.rs","stream.rs"]},{"name":"schema","dirs":[{"name":"io_message","files":["from_message.rs","mod.rs"]},{"name":"io_thrift","files":["from_thrift.rs","mod.rs","to_thrift.rs"]},{"name":"types","files":["basic_type.rs","converted_type.rs","mod.rs","parquet_type.rs","physical_type.rs","spec.rs"]}],"files":["mod.rs"]},{"name":"statistics","files":["binary.rs","boolean.rs","fixed_len_binary.rs","mod.rs","primitive.rs"]},{"name":"write","dirs":[{"name":"indexes","files":["mod.rs","serialize.rs","write.rs"]}],"files":["column_chunk.rs","compression.rs","dyn_iter.rs","file.rs","mod.rs","page.rs","row_group.rs","statistics.rs","stream.rs"]}],"files":["compression.rs","error.rs","lib.rs","parquet_bridge.rs","types.rs"]};
createSourceSidebar();
